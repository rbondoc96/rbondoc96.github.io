const breakpoints = require('./src/core/breakpoints.json');
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Work Sans', ...defaultTheme.fontFamily.sans],
            },
            letterSpacing: {
                tightest: '-.075em',
            },
        },
        screens: {
            'xs': `${breakpoints.xs}px`,
            'sm': `${breakpoints.sm}px`,
            'md': `${breakpoints.md}px`,
            'lg': `${breakpoints.lg}px`,
            'xl': `${breakpoints.xl}px`,
            '2xl': `${breakpoints['2xl']}px`,
        },
        colors: {
            black: colors.black,
            cyan: {
                400: 'hsl(185, 90.2%, 48.2%)',
                700: colors.cyan[700],
            },
            gray: {
                950: 'hsl(240, 37.9%, 5.7%)',
            },
            rose: {
                600: 'hsl(347, 67.8%, 47.5%)',
            },
            slate: {
                800: 'hsl(230, 30%, 20%)',
                950: 'hsl(240, 25%, 10%)',
            },
            violet: {
                400: 'hsl(247.14, 36.84%, 44.71%)',
            },
            white: colors.zinc[50],
        },
        textColor: {
            black: colors.black,
            cyan: {
                400: 'hsl(185, 90.2%, 48.2%)',
            },
            // dark: 'hsl(240, 37.9%, 5.7%)',
            gray: {
                950: 'hsl(240, 37.9%, 5.7%)',
            },
            // light: colors.zinc[50],
            muted: colors.zinc[400],
            rose: {
                600: 'hsl(347, 67.8%, 47.5%)',
            },
            transparent: colors.transparent,
            white: colors.zinc[50],
        },
    },
    plugins: [],
};
