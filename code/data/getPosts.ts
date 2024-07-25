import { getXataClient } from "./xata.ts";

export async function getPosts() {
    const client = getXataClient();

    const records = await client.db.Post
        .sort("publishedAt", "desc")
        .select(["*", "author.*", "author.avatar.base64Content"])
        .getMany({
            pagination: { size: 10 }
        });

    return records;
}
