import { type Config } from "tailwindcss";

export default {
    content: [
        "{routes,islands,components}/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary-purple": "#54406e",
            },
            fontFamily: {
                "indie-flower": ["Indie Flower", "cursive"],
            }
        }
    }
} satisfies Config;
