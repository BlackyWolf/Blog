import { ComponentChildren } from "preact";
import { joinCss } from "~utilities";

interface Properties {
    children: ComponentChildren;
    class?: string;
}

export const Container = ({ children, class: _class }: Properties) => {
    const css = joinCss(
        "container mx-auto",
        _class
    );

    return (
        <div class={css}>
            {children}
        </div>
    );
};
