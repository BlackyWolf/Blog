import { getUserFromAuthCookie } from "$lib/server";
import type { Handle } from "@sveltejs/kit";

export const redirectFromLogin: Handle = async ({ event, resolve }) => {
    const isLoginPage = event.url.pathname === "/login";

    if (isLoginPage && event.locals.user) {
        return Response.redirect(new URL("/", event.url));
    }

    return await resolve(event);
};

export const setUser: Handle = async ({ event, resolve }) => {
    try {
        event.locals.user = getUserFromAuthCookie(event);
    } catch (error) {
        console.error("Error getting user from auth cookie:", error);
    }

    return await resolve(event);
};
