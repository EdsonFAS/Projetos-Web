/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                display: 'Open Sans, sans-serif', // Adds a new `font-display` class
                titles: 'Poppins, sans-serif',
            }
        }
    },
    plugins: [],
}