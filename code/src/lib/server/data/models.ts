import type { pages } from "./schema/pages.schema";
import type { posts } from "./schema/posts.schema";
import type { users } from "./schema/users.schema";

export type Page = typeof pages.$inferSelect;
export type NewPage = typeof pages.$inferInsert;

export type Post = typeof posts.$inferSelect;
export type NewPost = typeof posts.$inferInsert;

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type SessionUser = Omit<User, "id" | "password"> & {
    id: string;
    sessionId: string;
};
