import { DATABASE_URL, DEFAULT_USER, DEFAULT_USER_PASSWORD } from "$env/static/private";
import { hashPassword } from "$lib/server";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema";

export const db = drizzle({
    connection: {
        url: DATABASE_URL,
    },
    schema
});

export const seedDatabase = async () => {

    const defaultUser = await db.query.users.findFirst({
        where: (users, { eq }) => eq(users.username, DEFAULT_USER),
    });

    if (!defaultUser) {
        console.log("Seeding database...");

        await db.insert(schema.users).values({
            username: DEFAULT_USER,
            password: await hashPassword(DEFAULT_USER_PASSWORD),
            isAdmin: true,
        });

        console.log("Database seeded.");
    } else {
        console.log("Database already seeded.");
    }
};
