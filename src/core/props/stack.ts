import type {DimensionValue, ResponsiveValue} from '@/core/lib/types';
import type {ThemePropertyKey} from '@/core/theme';

type ResponsiveSpaceValue = ResponsiveValue<ThemePropertyKey<'space'> | DimensionValue>;

export type StackProps = {
    direction?: ResponsiveValue<'column' | 'row'>;
    space?: ResponsiveSpaceValue;
};

export default StackProps;
