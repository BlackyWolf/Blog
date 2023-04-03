<script lang="ts">
    import { page } from '$app/stores';
    import type { PageData } from './$types';

    /** @type {import().} */
    export let data: PageData;
</script>

<h1>User: {data.user?.email || 'undefined'}</h1>
