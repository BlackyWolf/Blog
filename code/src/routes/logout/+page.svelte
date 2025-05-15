<script lang="ts">
    import { Button } from "$lib";

    const { data } = $props();
</script>

<div class="m-auto">
    <h1>Logout</h1>

    <p>Are you sure you want to logout?</p>

    <form class="flex items-center gap-6" method="POST" action="?/login">
        <Button type="submit" color="red">Yes, log me out</Button>
        <Button type="button" color="slate" href={data.returnUrl}>Cancel</Button>
    </form>
</div>
