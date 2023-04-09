<script lang="ts">
    import { DeleteButton, Header, Input, SaveButton, TextArea } from '$lib';
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<Header title="New Author">
    <DeleteButton css="ml-auto">
        <a href="/manage/authors">Cancel</a>
    </DeleteButton>
</Header>

<form class="p-4" method="post" action="/manage/authors/new" enctype="multipart/form-data">
    <Input type="hidden" name="userId" value={data.session.user.id} />

    <div class="grid grid-cols-2 gap-4 mb-4">
        <Input name="penname" label="Penname" placeholder="e.g., J.K. Rolling ;)" />
        <Input type="file" name="profilePic" label="Profile Picture" />
    </div>

    <TextArea name="about" label="About" placeholder="What about me...?" />

    <SaveButton type="submit" css="mt-4 w-full">
        Add
    </SaveButton>
</form>
