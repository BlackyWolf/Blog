<script lang="ts">
    import { joinCss } from '$lib';
    import type { HtmlInputType } from './HtmlInputType';

    export let css = '';
    export let label = '';
    export let name: string;
    export let placeholder = '';
    export let required: boolean | undefined = false;
    export let rows: number | undefined = 6;
    export let value: any = '';

    const classes = joinCss(
        'rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset',
        'ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600',
        css
    );
</script>

<div class={classes}>
    {#if label}
        <label for={name} class="block text-xs font-medium text-gray-900">
            {label}
        </label>
    {/if}

    <textarea
        class="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        id={name}
        {name}
        {placeholder}
        {required}
        {rows}
        {value}
    ></textarea>
</div>
