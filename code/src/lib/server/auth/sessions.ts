import { db } from "../data/db";
import { sessions } from "../data/schema";
import { AuthError } from "./errors";

export async function createUserSession(
    userId: number,
    ipAddress: string,
    userAgent: string,
    expiresAt: Date
) {
    const existingSessions = await db.query.sessions.findMany({
        where: (sessions, { and, eq, gt }) => and(
            eq(sessions.userId, userId),
            eq(sessions.ipAddress, ipAddress),
            eq(sessions.userAgent, userAgent),
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
        await db.insert(sessions).values({
            userId,
            ipAddress,
            userAgent,
            expiresAt,
        });
    }
}
