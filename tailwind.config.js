/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'udemy-sans': ['udemy-sans', 'sans-serif'],
                'udemy-sans-bold': ['udemy-sans-bold', 'sans-serif']
            },
            height: {
                'screen-64': 'calc(100vh - 64px)',
            },
            animation: {
                'spin-10s': 'spin 10s linear infinite',
            }
        },
    },
    plugins: [],
    darkMode: 'class',
});
