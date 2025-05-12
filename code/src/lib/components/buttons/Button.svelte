<script lang="ts">
    import type { Color } from "$lib";
    import type { HTMLButtonAttributes } from "svelte/elements";

    type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

    interface Properties extends HTMLButtonAttributes {
        color?: Color;
        full?: boolean;
        size?: ButtonSize;
    }

    const {
        children,
        class: _class,
        color = "blue",
        full,
        size = "lg",
        type = "button",
        ...rest
    }: Properties = $props();

    function getButtonSize() {
        switch (size) {
            case "xs": return "px-2   py-1   text-xs";
            case "sm": return "px-2   py-1   text-sm";
            case "md": return "px-2.5 py-1.5 text-sm";
            case "lg": return "px-3   py-2   text-sm";
            case "xl": return "px-3.5 py-2.5 text-sm";
        }
    }

    function getButtonColor() {
        switch (color) {
            case "amber":   return "text-white bg-amber-600 hover:bg-amber-500 focus-visible:outline-indigo-600";
            case "black":   return "text-white bg-black hover:bg-gray-800 focus-visible:outline-gray-900";
            case "blue":    return "text-white bg-blue-600 hover:bg-blue-500 focus-visible:outline-blue-600";
            case "cyan":    return "text-white bg-cyan-600 hover:bg-cyan-500 focus-visible:outline-cyan-600";
            case "emerald": return "text-white bg-emerald-600 hover:bg-emerald-500 focus-visible:outline-emerald-600";
            case "fuchsia": return "text-white bg-fuchsia-600 hover:bg-fuchsia-500 focus-visible:outline-fuchsia-600";
            case "gray":    return "text-white bg-gray-600 hover:bg-gray-500 focus-visible:outline-gray-600";
            case "green":   return "text-white bg-green-600 hover:bg-green-500 focus-visible:outline-green-600";
            case "indigo":  return "text-white bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600";
            case "lime":    return "text-white bg-lime-600 hover:bg-lime-500 focus-visible:outline-lime-600";
            case "neutral": return "text-white bg-neutral-600 hover:bg-neutral-500 focus-visible:outline-neutral-600";
            case "orange":  return "text-white bg-orange-600 hover:bg-orange-500 focus-visible:outline-orange-600";
            case "pink":    return "text-white bg-pink-600 hover:bg-pink-500 focus-visible:outline-pink-600";
            case "purple":  return "text-white bg-purple-600 hover:bg-purple-500 focus-visible:outline-purple-600";
            case "red":     return "text-white bg-red-600 hover:bg-red-500 focus-visible:outline-red-600";
            case "rose":    return "text-white bg-rose-600 hover:bg-rose-500 focus-visible:outline-rose-600";
            case "sky":     return "text-white bg-sky-600 hover:bg-sky-500 focus-visible:outline-sky-600";
            case "slate":   return "text-white bg-slate-600 hover:bg-slate-500 focus-visible:outline-slate-600";
            case "stone":   return "text-white bg-stone-600 hover:bg-stone-500 focus-visible:outline-stone-600";
            case "teal":    return "text-white bg-teal-600 hover:bg-teal-500 focus-visible:outline-teal-600";
            case "violet":  return "text-white bg-violet-600 hover:bg-violet-500 focus-visible:outline-violet-600";
            case "white":   return "text-gray-900 bg-white hover:bg-gray-50 focus-visible:outline-gray-100";
            case "yellow":  return "text-white bg-yellow-600 hover:bg-yellow-500 focus-visible:outline-yellow-600";
            case "zinc":    return "text-white bg-zinc-600 hover:bg-zinc-500 focus-visible:outline-zinc-600";
        }
    }
</script>

<button
    class={[
        "rounded-md font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        getButtonSize(),
        getButtonColor(),
        full ? "w-full" : "",
        _class,
    ]}
    {type}
>
    {@render children?.()}
</button>
