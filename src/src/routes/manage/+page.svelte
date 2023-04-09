<script lang="ts">
    import { page } from '$app/stores';
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<h1>User: {data.session.user.email || 'undefined'}</h1>
