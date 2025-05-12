<script lang="ts">
    import type { HTMLInputAttributes } from "svelte/elements";

    interface Properties extends Omit<HTMLInputAttributes, "name"> {
        description?: string;
        label: string;
        name: string;
    }

    const {
        description,
        id,
        label,
        name,
        ...rest
    }: Properties = $props();
</script>

<div>
    <label for={id || name} class="mb-2">{label}</label>

    <input
        class={[
            "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1",
            "-outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2",
            "focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
        ]}
        id={id || name}
        {name}
        {...rest}
    />

    {#if description}
        <p class="mt-2 text-sm text-gray-500 m-block-0">{description}</p>
    {/if}
</div>
