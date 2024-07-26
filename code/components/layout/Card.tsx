import { ComponentChildren, JSX } from "preact";
import { joinCss } from "~utilities";

interface Properties<T extends JSX.ElementType> {
    as?: T | keyof JSX.IntrinsicElements;
    children: ComponentChildren;
    class?: string;
}

export function Card<T extends JSX.ElementType>({ as, children, class: _class }: Properties<T>) {
    const css = joinCss(
        "border-4 border-slate-300 rounded-lg p-4",
        _class
    );

    if (as) {
        const Wrapper = as;

        return (
            <Wrapper class={css}>
                {children}
            </Wrapper>
        );
    }

    return (
        <section class={css}>
            {children}
        </section>
    );
};
