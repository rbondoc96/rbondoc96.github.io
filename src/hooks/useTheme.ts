import {useThemeUI} from 'theme-ui';
import type {Theme} from '@/core/theme';

export default function useTheme(): Theme {
    const context = useThemeUI();

    return context.theme as Theme;
}
