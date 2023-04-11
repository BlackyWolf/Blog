<script lang="ts">
    import { Header, SaveButton, profilePictureBucket } from '$lib';
    import type { PageData } from './$types';

    export let data: PageData;

    console.log(data.authors);
</script>

<Header title="Authors">
    <SaveButton css="ml-auto">
        <a href="/manage/authors/new">New</a>
    </SaveButton>
</Header>

<div class="grid grid-cols-2 gap-4 items-center">
    {#each data.authors as author}
        <div class="flex items-center">
            <img
                src={`${profilePictureBucket}/${author.profile_pic}`}
                title={author.penname}
                alt={author.penname}
                class="h-10 w-10 rounded-full block ml-4 my-4"
            >

            <div class="ml-4">
                <h6 class="font-semibold">{author.penname}</h6>

                <span class="text-sm">{author.user_id}</span>
            </div>
        </div>

        <div class="ml-auto">
            <button>Edit</button>
        </div>
    {/each}
</div>
