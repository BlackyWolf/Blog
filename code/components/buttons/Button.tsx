import { ComponentChildren } from "preact";
import { Colors, joinCss } from "~utilities";

type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
type ButtonType = "button" | "submit" | "reset";

interface Properties {
    children: ComponentChildren;
    class?: string;
    color?: Colors;
    full?: boolean;
    href?: string;
    size?: ButtonSize;
    type?: ButtonType;
}

function getBgColor(color: Colors) {
    switch (color) {
        case "Amber": return "bg-amber-600 hover:bg-amber-700";
        case "Blue": return "bg-blue-600 hover:bg-blue-700";
        case "Cyan": return "bg-cyan-600 hover:bg-cyan-700";
        case "Emerald": return "bg-emerald-600 hover:bg-emerald-700";
        case "Fuchsia": return "bg-fuchsia-600 hover:bg-fuchsia-700";
        case "Gray": return "bg-gray-600 hover:bg-gray-700";
        case "Green": return "bg-green-600 hover:bg-green-700";
        case "Indigo": return "bg-indigo-600 hover:bg-indigo-700";
        case "Lime": return "bg-lime-600 hover:bg-lime-700";
        case "Neutral": return "bg-neutral-600 hover:bg-neutral-700";
        case "Orange": return "bg-orange-600 hover:bg-orange-700";
        case "Pink": return "bg-pink-600 hover:bg-pink-700";
        case "Primary": return "bg-primary-600 hover:bg-primary-700";
        case "Purple": return "bg-purple-600 hover:bg-purple-700";
        case "Red": return "bg-red-600 hover:bg-red-700";
        case "Rose": return "bg-rose-600 hover:bg-rose-700";
        case "Slate": return "bg-slate-600 hover:bg-slate-700";
        case "Sky": return "bg-sky-600 hover:bg-sky-700";
        case "Stone": return "bg-stone-600 hover:bg-stone-700";
        case "Teal": return "bg-teal-600 hover:bg-teal-700";
        case "Violet": return "bg-violet-600 hover:bg-violet-700";
        case "Yellow": return "bg-yellow-600 hover:bg-yellow-700";
        case "Zinc": return "bg-zinc-600 hover:bg-zinc-700";
    }
}

function getTextColor(_color: Colors) {
    return "text-white";
}

function getSize(size: ButtonSize) {
    switch (size) {
        case "xs": return "px-2 py-1 text-xs";
        case "sm": return "px-2 py-1 text-sm";
        case "md": return "px-2.5 py-1.5 text-sm";
        case "lg": return "px-3 py-2 text-sm";
        case "xl": return "px-3.5 py-2.5 text-base";
    }
}

export const Button = ({
    children,
    class: _class,
    color = 'Primary',
    full,
    href,
    size = 'md',
    type = 'button'
}: Properties) => {
    const css = joinCss(
        "font-semibold px-4 py-2 block transition duration-150",
        getBgColor(color),
        getTextColor(color),
        getSize(size),
        href
            ? full
                ? "block w-full"
                : "inline-block"
            : full
                ? "w-full"
                : undefined,
        _class
    );

    if (href) {
        return (
            <a href={href} class={css}>
                {children}
            </a>
        );
    }

    return (
        <button class={css} type={type}>
            {children}
        </button>
    );
};
