import { verifyPassword } from "$lib/server/crypto";
import { getUserByUsername } from "./getUserByUsername";

export async function authenticateUser(username: string, password: string) {
    const user = await getUserByUsername(username);

    if (!user || !user.enabled) return;

    const passwordVerified = await verifyPassword(password, user.password);

    if (!passwordVerified) return;

    return user;
}
