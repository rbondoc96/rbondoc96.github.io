import {createThemeVariant} from '@/core/theme/utils';

const text = createThemeVariant({
    body: {
        color: 'white',
        fontSize: ['md', 'lg'],
        fontWeight: 'light',
        lineHeight: 'md',
    },
});

export default text;
