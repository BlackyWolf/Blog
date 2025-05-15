import { and, eq } from "drizzle-orm";
import { db } from "../data/db";
import { sessions } from "../data/schema";
import { AuthError } from "./errors";
import { decodeId } from "../data";

export async function createUserSession(
    userId: number,
    ipAddress: string,
    userAgent: string,
    expiresAt: Date
) {
    const currentSession = await db.query.sessions.findFirst({
        where: (sessions, { and, eq, gt }) => and(
            eq(sessions.userId, userId),
            eq(sessions.ipAddress, ipAddress),
            eq(sessions.userAgent, userAgent),
            gt(sessions.expiresAt, new Date())
        ),
    });

    if (currentSession) {
        return currentSession.id;
    }

    const existingSessions = await db.query.sessions.findMany({
        where: (sessions, { and, eq, gt }) => and(
            eq(sessions.userId, userId),
            gt(sessions.expiresAt, new Date())
        ),
    });

    if (existingSessions.length > 3) {
        throw new AuthError(
            "session:too_many",
            "User has too many active sessions. Please log out from other devices."
        );
    }

    if (existingSessions.length === 0) {
        const insertedId = await db.insert(sessions)
            .values({
                userId,
                ipAddress,
                userAgent,
                expiresAt,
            })
            .returning({
                insertedId: sessions.id,
            });

        return insertedId[0].insertedId;
    }
}

export async function deleteUserSession(
    userId: number,
    ipAddress: string,
    userAgent: string
) {
    await db.delete(sessions).where(and(
        eq(sessions.userId, userId),
        eq(sessions.ipAddress, ipAddress),
        eq(sessions.userAgent, userAgent)
    ));
}

export async function deleteUserSessions(id: number) {
    await db.delete(sessions).where(eq(sessions.userId, id));
}

export async function expireUserSession(
    sessionId: string,
) {
    const ids = decodeId(sessionId);

    await db.update(sessions)
        .set({
            expiresAt: new Date(),
        })
        .where(and(
            eq(sessions.id, ids[0]),
        ));
}

export async function getUserSessions(id: number) {
    return await db.query.sessions.findMany({
        where: (sessions, { eq }) => eq(sessions.userId, id),
        orderBy: (sessions, { desc }) => desc(sessions.expiresAt),
    });
}
