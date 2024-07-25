import { ComponentChildren } from "preact";
import { joinCss } from "~utilities";
import { useNav } from "~components";

interface Properties {
    active?: string;
    children: ComponentChildren;
    class?: string;
    href: string;
}

export const NavLink = ({
    children,
    class: _class,
    href
}: Properties) => {
    const nav = useNav();

    const css = joinCss(
        _class,
        nav.current === href ? nav.active : undefined
    );

    return (
        <a href={href} class={css}>
            {children}
        </a>
    );
};
