<script lang="ts">
    import { Header, SaveButton } from '$lib';
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<Header title="Authors">
    <SaveButton css="ml-auto">
        <a href="/manage/authors/new">New</a>
    </SaveButton>
</Header>

<table class="min-w-full divide-y divide-gray-300 overflow-hidden">
    <thead>
        <tr>
            <th class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"></th>
            <th class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Penname</th>
            <th class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"></th>
        </tr>
    </thead>
    <tbody class="divide-y divide-gray-200 bg-white">
        {#each data.authors as author}
            <tr>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {#if author.profile_pic}
                        <img src={author.profile_pic} title={author.penname} alt={author.penname}>
                    {:else}
                        <i>o</i>
                    {/if}
                </td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {author.penname}
                </td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <button>Edit</button>
                </td>
            </tr>
        {/each}
    </tbody>
</table>
