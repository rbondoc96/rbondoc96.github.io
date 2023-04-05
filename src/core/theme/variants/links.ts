import colors from '@/core/theme/tokens/colors';
import {createThemeVariant} from '@/core/theme/utils';

const links = createThemeVariant({
    gradient0TextOnHover: {
        'background-image': 'unset',
        'background-clip': 'unset',
        'transition': 'all 300ms',

        '&:hover': {
            'background-image': `linear-gradient(0deg, ${colors.red}, ${colors.purple})`,
            'background-clip': 'text',
            'color': 'transparent',
        },
    },
    gradient90TextOnHover: {
        'background-image': 'unset',
        'background-clip': 'unset',
        'transition': 'all 300ms',

        '&:hover': {
            'background-image': `linear-gradient(90deg, ${colors.red}, ${colors.purple})`,
            'background-clip': 'text',
            'color': 'transparent',
        },
    },
    gradient180TextOnHover: {
        'background-image': 'unset',
        'background-clip': 'unset',
        'transition': 'all 300ms',

        '&:hover': {
            'background-image': `linear-gradient(180deg, ${colors.red}, ${colors.purple})`,
            'background-clip': 'text',
            'color': 'transparent',
        },
    },
    gradient270TextOnHover: {
        'background-image': 'unset',
        'background-clip': 'unset',
        'transition': 'all 300ms',

        '&:hover': {
            'background-image': `linear-gradient(270deg, ${colors.red}, ${colors.purple})`,
            'background-clip': 'text',
            'color': 'transparent',
        },
    },
    gradientUnderlineOnHover: {
        'background-image': `linear-gradient(90deg, ${colors.blue}, ${colors.blue}), linear-gradient(90deg, ${colors.red}, ${colors.purple})`,
        'backgroundPosition': '100% 100%, 0 100%',
        'backgroundSize': '100% 2px, 0 2px',
        'backgroundRepeat': 'no-repeat',
        'transition': 'background-size 300ms',
        'paddingBottom': '2px',

        '&:hover': {
            backgroundSize: '0 2px, 100% 2px',
        },
    },
    sideNavigation: {
        'color': 'white',
        'fontWeight': 'light',
        'transition': 'colors300',

        '&:hover': {
            color: 'red',
        },
    },
    underlineOnHover: {
        'color': 'blue',
        'display': 'inline-block',

        '&::after': {
            content: '""',
            width: '100%',
            height: '2px',
            backgroundColor: 'blue',
        },
    },
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
});

export default links;
