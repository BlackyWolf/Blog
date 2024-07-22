import { PageProps } from "$fresh/server.ts";
import { Logo, MainNav } from "~components";

export default function Layout({ Component, state: _ }: PageProps) {
    return (
        <div>
            <Logo class="text-6xl" />

            <MainNav />

            <Component />
        </div>
    );
}
