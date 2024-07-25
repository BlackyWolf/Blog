import { NavLink } from "~components";
import { joinCss } from "~utilities";

interface Properties {
    class?: string;
    current?: string;
}

export const MainNav = ({ class: _class }: Properties) => {
    const css = joinCss(
        "flex",
        _class
    );

    const linkCss = joinCss(
        "border-t-2 border-l-2 border-b-2 last:border-r-2 border-primary-500",
        "text-slate-800 hover:bg-slate-600 hover:text-white",
        "transition duration-150 font-semibold px-4 py-2"
    );

    return (
        <nav class={css}>
            <NavLink href="/" class={linkCss}>Home</NavLink>
            <NavLink href="/posts" class={linkCss}>Posts</NavLink>
        </nav>
    );
};
