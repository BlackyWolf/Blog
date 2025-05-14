import { authenticateUser, createUserSession, setAuthCookie } from "$lib/server";
import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
    login: async (event) => {
        const { request } = event;

        const formData = await request.formData();

        const username = formData.get("username") as string;
        const password = formData.get("password") as string;
        const rememberMe = formData.get("rememberMe") as string;

        const user = await authenticateUser(username, password);

        if (!user) {
            return {
                success: false,
                error: "Invalid username or password",
            };
        }

        const expiresAt = rememberMe === "on"
            ? new Date(Date.now() + 1000 * 60 * 60 * 24 * 30) // 30 days
            : new Date(Date.now() + 1000 * 60 * 60); // 1 hour

        createUserSession(user.id, event.getClientAddress(), event.locals.userAgent, expiresAt);
        setAuthCookie(event, user, expiresAt);

        throw redirect(302, "/");
    }
};
