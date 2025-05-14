import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
    id: integer().primaryKey({ autoIncrement: true }).notNull(),
    username: text({ length: 50 }).notNull().unique(),
    password: text().notNull(),
    enabled: integer({ mode: "boolean" }).notNull().default(true),
    mfaCode: text("mfa_code"),
    isAdmin: integer("is_admin", { mode: "boolean" }).notNull().default(false),
    createdAt: integer("created_at", { mode: "timestamp" })
        .notNull()
        .default(sql`(CURRENT_TIMESTAMP)`),
    updatedAt: integer("updated_at", { mode: "timestamp" })
        .notNull()
        .default(sql`(CURRENT_TIMESTAMP)`)
        .$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
});
