import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { users } from "./users.schema";

export const sessions = sqliteTable("sessions", {
    id: integer().primaryKey({ autoIncrement: true }).notNull(),
    createdAt: integer("created_at", { mode: "timestamp" })
        .notNull()
        .default(sql`(CURRENT_TIMESTAMP)`),
    userId: integer("user_id").notNull().references(() => users.id),
    ipAddress: text("ip_address").notNull(),
    userAgent: text("user_agent").notNull(),
    expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
});
