import { dev } from "$app/environment";
import { decrypt, encrypt, getUserByUsername, verifyPassword, type User } from "$lib/server";
import type { RequestEvent } from "@sveltejs/kit";

const AUTH_COOKIE_NAME = "bwsk.auth.session";

export async function authenticateUser(username: string, password: string) {
    if (!username || !password) return;

    const user = await getUserByUsername(username);

    if (!user) return;

    const passwordVerified = await verifyPassword(password, user.password);

    if (!passwordVerified) return;

    user.password = "";

    return user;
}

export function deleteAuthCookie(event: RequestEvent) {
    event.cookies.delete(AUTH_COOKIE_NAME, {
        path: "/",
    });
}

export function getUserFromAuthCookie(event: RequestEvent) {
    const authCookie = event.cookies.get(AUTH_COOKIE_NAME);

    if (!authCookie) return;

    const decryptedCookie = decrypt(authCookie);

    if (!decryptedCookie) return;

    const user = JSON.parse(decryptedCookie) as User;

    if (!user) return;

    return user;
}

export function setAuthCookie(event: RequestEvent, user: User, expiresAt: Date) {
    const userJson = JSON.stringify(user);

    const encryptedUser = encrypt(userJson);

    event.cookies.set(AUTH_COOKIE_NAME, encryptedUser, {
        httpOnly: true,
        expires: expiresAt,
        path: "/",
        secure: dev ? false : true,
        sameSite: "strict",
    });
}
