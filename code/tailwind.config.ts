import { type Config } from "tailwindcss";

export default {
    content: [
        "{routes,islands,components}/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": {
                    900: "#010001",
                    800: "#150C21",
                    700: "#2A1B3D",
                    600: "#3F2C57",
                    500: "#54406e",
                    400: "#75618F",
                    300: "#9684AE",
                    200: "#B7A9CA",
                    100: "#D9D0E4",
                },
            },
            fontFamily: {
                "indie-flower": ["Indie Flower", "cursive"],
            }
        }
    }
} satisfies Config;
