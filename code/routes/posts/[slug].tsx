import { PageProps } from "$fresh/server.ts";

export default function Post({ params }: PageProps) {
    const { slug } = params;

    return (
        <>
            <h1>{slug}</h1>
        </>
    );
}
