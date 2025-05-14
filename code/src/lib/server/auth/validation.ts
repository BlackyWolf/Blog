import { verifyPassword } from "$lib/server/crypto";
import { AuthError } from "./errors";
import { getUserByUsername } from "./queries";

export async function authenticateUser(username: string, password: string) {
    if (!username || !password) {
        throw new AuthError(
            "user:authentication_failed",
            "Username and password are required."
        );
    }

    const user = await getUserByUsername(username);

    if (!user || !user.enabled) {
        throw new AuthError(
            "user:authentication_failed",
            "Unable to locate user with the provided username."
        );
    };

    const passwordVerified = await verifyPassword(password, user.password);

    if (!passwordVerified) {
        throw new AuthError(
            "user:authentication_failed",
            "Invalid password."
        );
    }

    user.password = "";

    return user;
}
