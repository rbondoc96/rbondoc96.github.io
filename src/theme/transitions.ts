import type {ThemeTransitionOptions} from '@/types/theme';

const transitions: ThemeTransitionOptions = {
    duration: {
        0: '0ms',
        75: '75ms',
        100: '100ms',
        150: '150ms',
        200: '200ms',
        300: '300ms',
        500: '500ms',
        700: '700ms',
        1000: '1000ms',
    },
    property: {
        none: 'none',
        all: 'all',
        colors: 'color, background-color, border-color, text-direction-color, fill, stroke',
        opacity: 'opacity',
        shadow: 'shadow',
        transform: 'transform',
    },
    timingFunction: {
        'linear': 'linear',
        'in': 'cubic-bezier(0.4, 0, 1, 1)',
        'out': 'cubic-bezier(0, 0, 0.2, 1)',
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
};

export default transitions;
