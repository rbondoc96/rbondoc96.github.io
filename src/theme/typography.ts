import type {ThemeTypography} from '@/types/theme';

const typography: ThemeTypography = {
    letterSpacing: {
        tightest: {
            letterSpacing: '-0.075em',
        },
        tighter: {
            letterSpacing: '-0.05em',
        },
        tight: {
            letterSpacing: '-0.025em',
        },
        normal: {
            letterSpacing: '0em',
        },
        wide: {
            letterSpacing: '0.025em',
        },
        wider: {
            letterSpacing: '0.05em',
        },
        widest: {
            letterSpacing: '0.1em',
        },
    },
    size: {
        'xs': {
            fontSize: '0.75rem',
            lineHeight: '1rem',
        },
        'sm': {
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
        },
        'base': {
            fontSize: '1rem',
            lineHeight: '1.5rem',
        },
        'md': {
            fontSize: '1rem',
            lineHeight: '1.5rem',
        },
        'lg': {
            fontSize: '1.125rem',
            lineHeight: '1.75rem',
        },
        'xl': {
            fontSize: '1.25rem',
            lineHeight: '1.75rem',
        },
        '2xl': {
            fontSize: '1.5rem',
            lineHeight: '2rem',
        },
        '3xl': {
            fontSize: '1.875rem',
            lineHeight: '2.25rem',
        },
        '4xl': {
            fontSize: '2.25rem',
            lineHeight: '2.5rem',
        },
        '5xl': {
            fontSize: '3rem',
            lineHeight: '1',
        },
        '6xl': {
            fontSize: '3.75rem',
            lineHeight: '1',
        },
        '7xl': {
            fontSize: '4.5rem',
            lineHeight: '1',
        },
        '8xl': {
            fontSize: '6rem',
            lineHeight: '1',
        },
        '9xl': {
            fontSize: '6rem',
            lineHeight: '1',
        },
    },
    weight: {
        thin: {fontWeight: 100},
        extralight: {fontWeight: 200},
        light: {fontWeight: 300},
        normal: {fontWeight: 400},
        medium: {fontWeight: 500},
        semibold: {fontWeight: 600},
        bold: {fontWeight: 700},
        extrabold: {fontWeight: 800},
        black: {fontWeight: 900},
    },
};

export default typography;
