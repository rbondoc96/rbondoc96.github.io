import type {ParentComponent} from 'solid-js';
import {ThemeProvider as StyledThemeProvider} from 'solid-styled-components';

import theme from '@/theme';

const ThemeProvider: ParentComponent = (props) => (
    <StyledThemeProvider theme={theme}>{props.children}</StyledThemeProvider>
);

export default ThemeProvider;
