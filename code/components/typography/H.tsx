import { ComponentChildren } from "preact";
import { joinCss } from "~utilities";

type Size = "1" | "2" | "3" | "4" | "5" | "6";

interface Properties {
    children: ComponentChildren;
    class?: string;
    size: Size;
}

function getTextSize(size: Size) {
    switch (size) {
        case "1": return "text-5xl mb-8";
        case "2": return "text-4xl mb-6";
        case "3": return "text-3xl mb-4";
        case "4": return "text-2xl mb-2";
        case "5": return "text-xl mb-2";
        case "6": return "text-lg mb-1";
    }
}

export const H = ({ children, class: _class, size }: Properties) => {
    const css = joinCss(
        "font-semibold",
        getTextSize(size),
        _class
    );

    switch (size) {
        case "1": return <h1 class={css}>{children}</h1>;
        case "2": return <h2 class={css}>{children}</h2>;
        case "3": return <h3 class={css}>{children}</h3>;
        case "4": return <h4 class={css}>{children}</h4>;
        case "5": return <h5 class={css}>{children}</h5>;
        case "6": return <h6 class={css}>{children}</h6>;
    }
};
