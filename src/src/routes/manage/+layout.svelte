<script lang="ts">
    import { invalidate } from '$app/navigation';
    import { onMount } from 'svelte';
    import type { LayoutData } from './$types';
    import { hash256, profilePictureBucket } from '$lib';

    export let data: LayoutData;

    $: ({ supabase, session } = data);

    onMount(() => {
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_, _session) => {
            if (_session?.expires_at !== session?.expires_at) {
                invalidate('supabase:auth');
            }
        });

        return () => subscription.unsubscribe();
    });

    const user = data.session?.user;

    let profilePicture: string;

    async function setProfilePicture() {
        if (user?.id) {
            profilePicture = await hash256(user.id)
        }
    }

    setProfilePicture();
</script>

<div class="flex py-6 flex-grow">
    <nav>
        {#if user && profilePicture}
            <div class="flex items-center pr-4 border-b border-gray-300 mb-4">
                <img
                    src={`${profilePictureBucket}/${profilePicture}.png`}
                    alt={user.email}
                    title={user.email}
                    class="h-16 w-16 rounded-full m-4"
                >

                <div>
                    <h6 class="text-sm font-semibold">{user.email}</h6>
                    <span class="text-xs">{user.id}</span>
                </div>
            </div>
        {/if}

        <a href="/manage">Dashboard</a>
        <a href="/manage/posts">Posts</a>
        <a href="/manage/categories">Categories</a>
        <a href="/manage/authors">Authors</a>
    </nav>

    <section class="flex-grow bg-white rounded-md shadow-md overflow-hidden">
        <slot />
    </section>
</div>

<style>
    nav {
        @apply p-2 pb-4 min-w-[20%] rounded-md shadow-md flex flex-col bg-white mr-6;
    }

    nav a {
        @apply px-4 py-2 transition duration-150 rounded-md mb-2;
    }

    nav a:hover {
        @apply bg-blue-600 text-white;
    }

    nav a:last-child {
        @apply mb-0;
    }
</style>
