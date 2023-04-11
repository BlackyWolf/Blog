<script lang="ts">
    import { enhance } from '$app/forms';
    import { DeleteButton, Header, Input, SaveButton, Select, TextArea } from '$lib';
    import type { ActionData, PageData } from './$types';

    export let data: PageData;
    export let form: ActionData;
</script>

<Header title="New Author">
    <DeleteButton css="ml-auto">
        <a href="/manage/authors">Cancel</a>
    </DeleteButton>
</Header>

<form class="p-4" method="post" action="/manage/authors/new" enctype="multipart/form-data" use:enhance>
    {#if form?.errorMessage}
        <p class="text-red-600 font-semibold text-sm mb-4 border border-red-600 rounded-lg p-4">
            {form.errorMessage}
        </p>
    {/if}

    {#if data?.errorMessage}
        <p class="text-red-600 font-semibold text-sm mb-4 border border-red-600 rounded-lg p-4">
            {data.errorMessage}
        </p>
    {/if}

    {#if form?.warning}
        <p class="text-yellow-600 font-semibold text-sm mb-4 border border-yellow-600 rounded-lg p-4">
            {form.warning}
        </p>
    {/if}

    <Input type="hidden" name="userId" value={data.session.user.id} />

    <div class="grid grid-cols-2 gap-4 mb-4">
        <Input name="penname" label="Penname" placeholder="e.g., J.K. Rolling ;)" value={form?.penname} required />
        <Input type="file" name="profilePicture" label="Profile Picture" required />
        <Select name="userId" label="User" required>
            {#each data.users as user}
                <option value={user.id}>{user.email}</option>
            {/each}
        </Select>
    </div>

    <TextArea name="about" label="About" placeholder="What about me...?" value={form?.about} required />

    <SaveButton type="submit" css="mt-4 w-full">
        Add
    </SaveButton>
</form>
