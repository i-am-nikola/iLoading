/** @type {import('tailwindcss').Config} */
module.exports = {
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
            }
        },
    },
    plugins: [],
    darkMode: 'class',
}
