import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const posts = sqliteTable("posts", {
    id: integer().primaryKey({ autoIncrement: true }).notNull(),
    title: text({ length: 200 }).notNull(),
    body: text(),
    slug: text({ length: 450 }).notNull().unique(),
    published: integer({ mode: "boolean" }).notNull().default(false),
    tags: text({ length: 200 }),
    createdAt: integer("created_at", { mode: "timestamp" })
        .notNull()
        .default(sql`(CURRENT_TIMESTAMP)`),
    updatedAt: integer("updated_at", { mode: "timestamp" })
        .notNull()
        .default(sql`(CURRENT_TIMESTAMP)`)
        .$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
    publishedAt: integer("published_at", { mode: "timestamp" }),
});
