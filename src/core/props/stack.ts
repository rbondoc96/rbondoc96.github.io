import type {ResponsiveThemeValue, Theme} from '@/core/theme';

export type StackProps = {
    direction?: 'column' | 'row';
    space?: ResponsiveThemeValue<keyof Theme['space']>;
};

export default StackProps;
