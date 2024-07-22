import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component, state: _ }: PageProps) {
    return (
        <div>
            <Component />
        </div>
    );
}
