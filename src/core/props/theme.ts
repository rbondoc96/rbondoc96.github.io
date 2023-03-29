import type {ElementType} from 'react';
import type {ThemeUIStyleObject} from 'theme-ui';

export type ThemeProps = {
    _focus?: ThemeUIStyleObject;
    _hover?: ThemeUIStyleObject;
    as?: ElementType;
    sx?: ThemeUIStyleObject;
    variant?: string;
};

export default ThemeProps;
