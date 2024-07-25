import { PageProps } from "$fresh/server.ts";
import { Container, Icon, Logo, MainNav, NavProvider, NavState } from "~components";

export default function Layout({ Component, url }: PageProps) {
    const navState: NavState = {
        active: "bg-primary-500 hover:bg-primary-500 text-white",
        current: url.pathname,
    };

    return (
        <NavProvider state={navState}>
            <Container class="flex flex-col items-center my-6 pb-6 border-b border-slate-300">
                <div class="md:grid md:grid-cols-3 w-full">
                    <div class="col-start-2 flex flex-col items-center">
                        <Logo class="text-6xl" />
                        <span class="block text-slate-600 font-black text-4xl">Blog</span>
                    </div>
                    <div class="flex flex-col items-center mt-4 md:mt-0 md:items-end">
                        <a href="https://github.com/BlackyWolf" target="_blank" rel="nofollow noopener noreferrer">
                            <Icon icon="github" style="brands" size="lg" /> GitHub
                        </a>
                    </div>
                </div>

                <MainNav class="mt-8" />
            </Container>

            <Container>
                <Component />
            </Container>
        </NavProvider>
    );
}
