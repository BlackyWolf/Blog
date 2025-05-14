import { db } from "../data/db";

export async function getUserByUsername(username: string) {
    return await db.query.users.findFirst({
        where: (user, { eq }) => eq(user.username, username),
    });
}
