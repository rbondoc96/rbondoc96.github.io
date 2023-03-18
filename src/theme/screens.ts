import type {ScreenMediaQueries} from '@/types/theme';

const screens: ScreenMediaQueries = {
    'sm': 640,
    'md': 768,
    'lg': 1024,
    'xl': 1280,
    '2xl': 1536,
    'largerThan': function (size) {
        return `@media (min-width: ${this[size]}px)`;
    },
    'smallerThan': function (size) {
        return `@media (max-width: ${this[size]}px)`;
    },
};

export default screens;
