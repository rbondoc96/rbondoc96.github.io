import type {VariantDefinition} from '@/core/theme/';

const links: VariantDefinition = {
    underline: {
        'fontWeight': 'light',
        'textDecoration': 'underline',
        'textDecorationColor': 'blue',
        'textDecorationThickness': '2px',
        'textUnderlineOffset': '4px',

        '&:hover': {
            color: 'blue',
        },
    },
};

export default links;
