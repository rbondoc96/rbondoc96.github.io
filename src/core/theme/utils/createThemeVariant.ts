import type {ThemeUIStyleObject} from 'theme-ui';
import type {VariantDefinition} from '@/core/theme';

export const createThemeVariant = <Definition extends VariantDefinition>(
    definition: Definition,
): Record<keyof Definition, ThemeUIStyleObject> => {
    return definition;
};

export default createThemeVariant;
