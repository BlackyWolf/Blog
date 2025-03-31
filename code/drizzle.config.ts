import { defineConfig } from "drizzle-kit";

export default defineConfig({
    out: "./drizzle",
    schema: "./src/lib/server/data/schema",
    dialect: "sqlite",
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
});
