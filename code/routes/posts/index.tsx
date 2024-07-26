import { Handlers, PageProps } from "$fresh/server.ts";
import { Button, Icon } from "~components";
import { Card, H } from "~components";
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
            {data.map(({ author: a, content, id, slug, title }, index) => {
                const author = a?.toSerializable();

                return (
                    <>
                        {index !== 0 && (
                            <div class="flex justify-center my-16 text-primary-500">
                                <Icon style="duotone" icon="code-branch" size="2xl" />
                            </div>
                        )}

                        <Card as="article" key={id} class="grid grid-cols-4 p-8">
                            <div class="col-span-3 pr-8">
                                <header>
                                    <H size="3">{title}</H>
                                </header>

                                <p class="mb-6">{content}</p>

                                <Button href={`/posts/${slug}`}>Continue reading...</Button>
                            </div>

                            <footer class="border-l border-slate-300 pl-6 pr-24 flex flex-col justify-center">
                                <H size="5">Author</H>

                                <div class="flex items-center">
                                    <img
                                        src={`data:image/png;base64, ${author?.avatar?.base64Content}`}
                                        height="50"
                                        width="50"
                                        class="rounded-full overflow-hidden"
                                        alt={author?.name}
                                    />

                                    <span class="ml-4">{author?.name}</span>
                                </div>
                            </footer>
                        </Card>
                    </>
                );
            })}
        </>
    );
}
