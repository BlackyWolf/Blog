import { error, type Handle } from "@sveltejs/kit";

export const preloadStaticAssets: Handle = async ({ event, resolve }) => {
    return await resolve(event, {
        preload: ({ type }) =>
            type === "font"
            || type === "js"
            || type === "css"
            || type === "asset"
    });
};

export const setUserAgent: Handle = async ({ event, resolve }) => {
    const userAgent = event.request.headers.get("user-agent");

    if (!userAgent) {
        throw error(404, "Not found");
    }

    event.locals.userAgent = userAgent;

    return await resolve(event);
};
