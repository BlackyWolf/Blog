import { error, type Handle } from "@sveltejs/kit";

export const validateAdminUser: Handle = async ({ event, resolve }) => {
    if (!event.url.pathname.startsWith("/admin")) {
        return await resolve(event);
    }

    if (!event.locals.user) {
        throw error(404, "Not Found");
    }

    // try {

    // } catch (error) {
    //     console.error("Error getting user from auth cookie:", error);
    // }

    return await resolve(event);
};
