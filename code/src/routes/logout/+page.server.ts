import { deleteAuthCookie, expireUserSession } from "$lib/server";
import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
    logout: async (event) => {
        const user = event.locals.user;

        if (!user) {
            throw redirect(302, "/");
        }

        expireUserSession(user.sessionId);
        deleteAuthCookie(event);

        throw redirect(302, "/");
    }
};
