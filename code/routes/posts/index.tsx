import { Handlers, PageProps } from "$fresh/server.ts";
import { H } from "~components";
import { PagedPosts, getPosts } from "~data";

export const handler: Handlers<PagedPosts> = {
    async GET(_request, context) {
        const posts = await getPosts();

        return context.render(posts);
    }
};

export default function Posts({ data }: PageProps<PagedPosts>) {
    return (
        <>
            <H size="1">Posts</H>

            <hr />

            {data.map(({ author: a, content, id, title }) => {
                const author = a?.toSerializable();

                return (
                    <div key={id}>
                        <h2>{title}</h2>
                        <p>{content}</p>
                        <p>
                            <img
                                src={`data:image/png;base64, ${author?.avatar?.base64Content}`}
                                height="50"
                                width="50"
                                class="rounded-full overflow-hidden"
                                alt={author?.name}
                            />
                            {author?.name}
                        </p>
                    </div>
                )
            })}
        </>
    );
}
