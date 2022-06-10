import React, {FunctionComponent} from 'react';
import {ThemeProvider as MThemeProvider} from '@mui/material/styles';

import theme from './theme';

interface IThemeProvider {
    children: React.ReactNode
}

const ThemeProvider: FunctionComponent<IThemeProvider> = ({children}) => (
    <MThemeProvider theme={theme}>
        {children}
    </MThemeProvider>
);

export default ThemeProvider;
