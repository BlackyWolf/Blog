import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const pages = sqliteTable("pages", {
    id: integer().primaryKey({ autoIncrement: true }).notNull(),
    title: text({ length: 200 }).notNull(),
    body: text(),
    slug: text({ length: 450 }).notNull().unique(),
    published: integer({ mode: "boolean" }).notNull().default(false),
    createdAt: integer("created_at", { mode: "timestamp" })
        .notNull()
        .default(sql`(CURRENT_TIMESTAMP)`),
    updatedAt: integer("created_at", { mode: "timestamp" })
        .notNull()
        .default(sql`(CURRENT_TIMESTAMP)`)
        .$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
    publishedAt: integer("published_at", { mode: "timestamp" }),
});
