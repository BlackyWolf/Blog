import { DATABASE_URL } from "$env/static/private";
import { drizzle } from "drizzle-orm/libsql";

export const db = drizzle({
    connection: {
        url: DATABASE_URL,
    },
});
