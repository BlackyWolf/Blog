<script lang="ts">
    import { joinCss } from '$lib';

    export let css = '';
    export let label = '';
    export let name: string;
    export let required: boolean | undefined = false;
    export let value: any = '';

    const classes = joinCss(
        css
    );
</script>

<div class={classes}>
    {#if label}
        <label for={name} class="block text-xs font-medium text-gray-900">
            {label}
        </label>
    {/if}

    <select
        class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        id={name}
        {name}
        {required}
        {value}
    >
        <option value="">-- Select an option --</option>
        <slot />
    </select>
</div>
