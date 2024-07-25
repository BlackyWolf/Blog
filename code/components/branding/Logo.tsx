import { joinCss } from "~utilities";

interface Properties {
    class?: string;
}

export const Logo = ({ class: _class }: Properties) => {
    const css = joinCss(
        _class,
        "font-indie-flower text-primary-500"
    );

    return (
        <div class={css}>
            BlackyWolf
        </div>
    );
};
