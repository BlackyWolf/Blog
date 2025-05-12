import { seedDatabase } from "$lib/server/data/db";
import { sequence } from "@sveltejs/kit/hooks";
import { authHooks } from "./middleware";

await seedDatabase();

export const handle = sequence(
    authHooks,
    async ({ event, resolve }) => {
        return await resolve(event, {
            preload: ({ type }) => type === "font"  || type === "js" || type === "css" || type === "asset"
        });
    }
);
