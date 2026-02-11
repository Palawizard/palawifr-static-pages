/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                bg: '#0b0e11',
                surface: '#0f1216',
                text: '#e5e7eb',
                mute: '#9aa3af',
                brand: '#0ea5e9'
            },
            boxShadow: {
                elev: '0 10px 30px rgba(0,0,0,.35)'
            },
            borderRadius: {
                xl2: '1rem'
            }
        }
    },
    plugins: []
}
