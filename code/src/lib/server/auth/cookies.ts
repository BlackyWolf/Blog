import { dev } from "$app/environment";
import { AuthError, decrypt, encrypt, type SessionUser} from "$lib/server";
import type { RequestEvent } from "@sveltejs/kit";

const AUTH_COOKIE_NAME = "bwsk.auth.session";

export function deleteAuthCookie(event: RequestEvent) {
    try {
        event.cookies.delete(AUTH_COOKIE_NAME, {
            path: "/",
        });
    } catch (error) {
        if (error instanceof Error) {
            throw new AuthError("cookie:delete_failed", "Failed to delete auth cookie: " + error.message);
        }

        throw error;
    }
}

export function getUserFromAuthCookie(event: RequestEvent): SessionUser | undefined {
    try {
        const authCookie = event.cookies.get(AUTH_COOKIE_NAME);

        if (!authCookie) return;

        const decryptedCookie = decrypt(authCookie);

        if (!decryptedCookie) return;

        const user = JSON.parse(decryptedCookie) as SessionUser;

        if (!user) return;

        return user;
    } catch (error) {
        if (error instanceof Error) {
            throw new AuthError("cookie:get_failed", "Failed to get auth cookie: " + error.message);
        }

        throw error;
    }
}

export function setAuthCookie(event: RequestEvent, user: SessionUser, expiresAt: Date) {
    try {
        const encryptedUser = encrypt(JSON.stringify(user));

        event.cookies.set(AUTH_COOKIE_NAME, encryptedUser, {
            httpOnly: true,
            expires: expiresAt,
            path: "/",
            secure: dev ? false : true,
            sameSite: "strict",
        });
    } catch (error) {
        if (error instanceof Error) {
            throw new AuthError("cookie:set_failed", "Failed to set auth cookie: " + error.message);
        }

        throw error;
    }
}
