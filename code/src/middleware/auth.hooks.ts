import { getUserFromAuthCookie } from "$lib/server";
import type { Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";

const setUser: Handle = async ({ event, resolve }) => {
    event.locals.user = getUserFromAuthCookie(event);

    return await resolve(event);
};

const redirectFromLogin: Handle = async ({ event, resolve }) => {
    const isLoginPage = event.url.pathname === "/login";

    if (isLoginPage && event.locals.user) {
        return Response.redirect(new URL("/", event.url));
    }

    return await resolve(event);
};

export default sequence(setUser, redirectFromLogin);
