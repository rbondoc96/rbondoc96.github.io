import type {DimensionValue, KeysOf, ResponsiveValue} from '@/core/lib/types';
import type {ThemePropertyKey} from '@/core/theme';

type ResponsiveSizeValue = ResponsiveValue<ThemePropertyKey<'sizes'> | DimensionValue>;

export type SizeProps = {
    maxHeight?: ResponsiveSizeValue;
    maxWidth?: ResponsiveSizeValue;
    minHeight?: ResponsiveSizeValue;
    minWidth?: ResponsiveSizeValue;
    height?: ResponsiveSizeValue;
    width?: ResponsiveSizeValue;
};

export const SizePropNames: KeysOf<SizeProps> = {
    maxHeight: true,
    maxWidth: true,
    minHeight: true,
    minWidth: true,
    height: true,
    width: true,
};

export default SizeProps;
