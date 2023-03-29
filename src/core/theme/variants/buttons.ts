import colors from '@/core/theme/tokens/colors';
import type {VariantDefinition} from '@/core/theme';

const buttons: VariantDefinition = {
    xFill: {
        'border': '2px solid',
        'borderColor': 'blue',
        'borderRadius': '3xl',
        'color': 'blue',
        'transition': 'all300',

        '&:hover': {
            boxShadow: `inset 12em 0 0 0 ${colors.blue}`,
            color: 'white',
            opacity: '90',
        },
    },
};

export default buttons;
