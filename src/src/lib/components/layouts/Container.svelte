<script lang="ts">
    import { joinCss } from "$lib";


    export let centered = true;

    const css = joinCss(
        'container',
        centered ? 'mx-auto' : undefined
    );
</script>

<div class={css}>
    <slot />
</div>
