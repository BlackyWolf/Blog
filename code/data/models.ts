import { PageRecordArray, SelectedPick } from "@xata.io/client";
import { Post } from "~data";

export type {
    AuthorRecord as Author,
    CommentRecord as Comment,
    PageRecord as Page,
    PostRecord as Post,
    SettingsRecord as Settings,
} from "./xata.ts";

export type PagedPosts = PageRecordArray<Readonly<SelectedPick<Post, ["*"]>>>;
