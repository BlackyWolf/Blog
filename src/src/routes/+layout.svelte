<script lang="ts">
    import { Container, PrimaryButton } from '$lib';
    import '../app.css';
    import type { PageData } from './$types';

    export let data: PageData;

    async function logoutUser() {
        const { error } = await data.supabase.auth.signOut();

        if (error) {
            console.log(error);
        } else {
            window.location.href = '/';
        }
    }
</script>

<nav class="border-b border-gray-400 py-2">
    <Container>
        <ul class="flex items-center">
            <li class="logo">
                <a href="/">BlackyWolf <span class="font-sans font-thin">#Blog</span></a>
            </li>
            <li class="link">
                <a href="/">Home</a>
            </li>
            <li class="link">
                <a href="/posts">Latest Posts</a>
            </li>
            {#if data.session}
                <li class="link">
                    <a href="/manage">Manage</a>
                </li>
                <li class="ml-auto">
                    <span class="mr-4 text-sm font-semibold">{data.session.user.email}</span>

                    <PrimaryButton type="button" on:click={logoutUser}>
                        Signout
                    </PrimaryButton>
                </li>
            {/if}
        </ul>
    </Container>
</nav>

<main class="flex-grow bg-slate-100">
    <Container>
        <slot />
    </Container>
</main>

<footer class="mt-auto py-4 border-t border-gray-400">
    <Container>
        <p>Copyright &copy; BlackyWolf. All rights reserved.</p>
    </Container>
</footer>

<style>
    .logo {
        @apply mr-4 font-indie-flower text-4xl font-bold text-primary;
    }

    .link {
        @apply mx-2;
    }

    .link a {
        @apply px-4 py-2 block;
    }

    .link a:hover {
        @apply bg-gray-300 rounded-md transition duration-150;
    }
</style>
