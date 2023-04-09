<script lang="ts">
    import { invalidate } from '$app/navigation';
    import { onMount } from 'svelte';
    import type { LayoutData } from './$types';

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
</script>

<div class="flex pt-6">
    <nav class="flex flex-col bg-white mr-6">
        <span>

        </span>

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
        @apply p-2 min-w-[20%] rounded-md shadow-md;
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
