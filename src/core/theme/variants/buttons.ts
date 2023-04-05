import colors from '@/core/theme/tokens/colors';
import {createThemeVariant} from '@/core/theme';

const buttons = createThemeVariant({
    xFill: {
        'border': '2px solid',
        'borderColor': 'blue',
        'borderRadius': '3xl',
        'color': 'blue',
        'transition': 'all300',

        '&:hover': {
            boxShadow: `inset 12em 0 ${colors.blue}`,
            color: 'white',
            opacity: '90',
        },
    },
    unstyled: {
        padding: '0 !important',
    },
});

export default buttons;
