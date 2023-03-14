const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            black: 'rgb(9, 9, 20)',
            dark: 'hsl(240, 25%, 10%)',
            light: 'hsl(0, 0%, 95%)',
            white: 'rgb(243, 243, 243)',
            orange: 'rgb(222, 150, 80)',
            blue: {
                DEFAULT: 'rgb(90, 180, 231)',
            },
            gray: {
                DEFAULT: colors.gray['300'],
            },
            red: 'hsl(347, 67.8%, 47.5%)',
            blue: 'hsl(185, 90.2%, 48.2%)',
        },
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        extend: {
            letterSpacing: {
                tightest: '-0.075em',
            },
            // fontSize: {
            //     'xs': '0.75rem',
            //     'sm': '0.875rem',
            //     'xl': 'clamp(1rem, 2.5vw, 1.25rem)',
            //     '2xl': 'clamp(1.2rem, 4vw, 1.5rem)',
            //     '5xl': 'clamp(1.8rem, 7vw, 3.5rem)',
            //     '7xl': 'clamp(2.5rem, 7vw, 4.5rem)',
            // },
        },
    },
    plugins: [],
};
