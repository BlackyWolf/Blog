<script lang="ts">
    import { joinCss } from '$lib/utilities';
    import type { ButtonType } from './ButtonType';

    export let type: ButtonType = 'button';
    export let css: string = '';

    const classes = joinCss(
        'bg-green-600 text-white rounded-md px-4 py-2',
        css
    );
</script>

<button {type} on:click class={classes}>
    <slot />
</button>
