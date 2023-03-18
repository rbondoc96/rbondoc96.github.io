import './fonts';
import type Theme from '@/types/theme';
import colors from './colors';
import screens from './screens';
import spacing from './spacing';
import transform from './transform';
import transitions from './transitions';
import typography from './typography';

const theme: Theme = {
    colors,
    screens,
    spacing,
    transform,
    transitions,
    typography,
};

export default Object.freeze(theme);
