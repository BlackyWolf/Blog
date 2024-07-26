import { PageProps } from "$fresh/server.ts";

export default function Author({ params }: PageProps) {
    const { slug } = params;

    return (
        <>
            {slug}
        </>
    );
}
