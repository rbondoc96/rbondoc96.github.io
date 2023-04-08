import type {ThemeVariants} from '@/core/theme';

export type VariantProp<Component extends keyof ThemeVariants> = {
    variant?: `${Component}.${keyof ThemeVariants[Component] extends string
        ? keyof ThemeVariants[Component]
        : never}`;
};
