import {useThemeUI} from 'theme-ui';

export default function useTheme() {
    const context = useThemeUI();

    return context.theme;
}
