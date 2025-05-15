<script lang="ts">
    import { page } from '$app/state';

    let { children } = $props();

    let links = [
        { href: '/admin', label: 'Dashboard', strict: true },
        { href: '/admin/posts', label: 'Posts' },
    ];

    function isCurrentPage(href: string, strict = false) {
        return strict
            ? href === page.url.pathname
            : page.url.pathname.startsWith(href);
    }
</script>

<h1 class="mb-12">Admin Portal</h1>

<div class="flex items-start gap-12">
    <nav class="admin-nav">
        {#each links as { href, label, strict }}
            <a {href} class:active={isCurrentPage(href, strict)}>
                {label}
            </a>
        {/each}
    </nav>

    <div class="flex flex-col grow">
        {@render children()}
    </div>
</div>

<style lang="postcss">
    @reference "tailwindcss";

    :global(.admin-nav) {
        @apply flex flex-col border rounded-md px-8 py-4 space-y-8;

        & > a {
            @apply text-sm uppercase font-semibold text-gray-500;

            &.active {
                @apply text-cyan-600 underline;
            }
        }
    }
</style>
