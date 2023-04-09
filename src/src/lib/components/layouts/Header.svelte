<script lang="ts">
    export let title: String;
</script>

<div class="flex items-center p-4 border-b border-gray-300">
    <h1 class="font-semibold text-2xl">{title}</h1>

    <slot />
</div>
