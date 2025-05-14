<script lang="ts">
    import { Button } from "$lib";

    let { children, data } = $props();
</script>

<h1 class="mb-12">Admin Portal</h1>

<div class="flex grow gap-12">
    <nav class="flex flex-col">
        <a href="/admin">Dashboard</a>
        <a href="/admin/posts">Posts</a>
    </nav>

    <div class="flex flex-col grow">
        {@render children()}
    </div>
</div>

