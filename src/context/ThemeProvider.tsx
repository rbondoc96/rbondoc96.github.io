import type {ParentComponent} from 'solid-js';
import {
    createGlobalStyles,
    ThemeProvider as StyledThemeProvider,
} from 'solid-styled-components';

import theme from '@/theme';

const GlobalStyles = createGlobalStyles`
    html {
        font-family: 'Work Sans', sans-serif;
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: ${theme.colors.dark};
    }
`;

const ThemeProvider: ParentComponent = (props) => (
    <StyledThemeProvider theme={theme}>
        <GlobalStyles />

        {props.children}
    </StyledThemeProvider>
);

export default ThemeProvider;
