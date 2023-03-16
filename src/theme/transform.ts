import type {ThemeTransformOptions} from '@/types/theme';
import spacing from './spacing';

const transform: ThemeTransformOptions = {
    ...spacing,
    '1/2': '50%',
    '1/3': '33.333333%',
    '2/3': '66.666667%',
    '1/4': '25%',
    '3/4': '75%',
    'full': '100%',
};

export default transform;
