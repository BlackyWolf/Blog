import { joinCss } from "~utilities";

type RelativeSize = "2xs" | "xs" | "sm" | "lg" | "xl" | "2xl";
type LiteralSize = "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x";

type IconAnimation = "beat" | "beat-fade" | "bounce" | "fade" | "flip" | "shake" | "spin" | "spin-pulse" | "spin-reverse";
type IconFlip = "both" | "horizontal" | "vertical";
type IconRotate = "90" | "180" | "270" | string;
type IconSize = RelativeSize | LiteralSize;
type IconStyle = "brands" | "duotone" | "light" | "regular" | "solid" | "thin";
type IconType = "classic" | "sharp";

interface DuotoneProperties {
    primaryColor?: string;
    primaryOpacity?: number;
    secondaryColor?: string;
    secondaryOpacity?: number;
}

interface Properties {
    animate?: IconAnimation;
    border?: boolean;
    class?: string;
    duotone?: DuotoneProperties;
    fixedWidth?: boolean;
    flip?: IconFlip;
    icon: string;
    list?: boolean;
    pull?: "left" | "right";
    rotate?: IconRotate;
    size?: IconSize;
    style?: IconStyle;
    swapOpacity?: boolean;
    theme?: string;
    type?: IconType;
}

function getIconStyle(style: IconStyle, type: IconType) {
    return joinCss(
        type === "sharp" && style !== "duotone" ? "fa-sharp" : undefined,
        type === "sharp" && style === "duotone"
            ? "fa-sharp-duotone fa-solid"
            : style === "duotone"
                ? "fa-duotone fa-solid"
                : `fa-${style}`
    );
}

export const Icon = ({
    class: _class,
    fixedWidth,
    icon,
    size,
    style = "solid",
    type = "classic",
}: Properties) => {
    const css = joinCss(
        getIconStyle(style, type),
        `fa-${icon}`,
        fixedWidth ? "fa-fw" : undefined,
        size ? `fa-${size}` : undefined,
        _class
    );

    return (
        <i class={css}></i>
    );
};
