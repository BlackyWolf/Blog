/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    plugins: [],
    theme: {
        extend: {
            colors: {
                primary: '#54406e'
            },
            fontFamily: {
                'indie-flower': ['Indie Flower', 'cursive']
            }
        }
    }
};

