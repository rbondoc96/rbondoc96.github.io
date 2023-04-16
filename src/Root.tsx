import '@/styles/index.css';
import {StrictMode} from 'react';
import {HelmetProvider} from 'react-helmet-async';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from 'theme-ui';
import App from '@/App';
import NavigationLinkProvider from '@/core/providers/NavigationLinkProvider';
import {getTheme} from '@/core/theme';

const theme = getTheme();

const Root = () => (
    <StrictMode>
        <HelmetProvider>
            <ThemeProvider theme={theme}>
                <NavigationLinkProvider>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </NavigationLinkProvider>
            </ThemeProvider>
        </HelmetProvider>
    </StrictMode>
);

export default Root;
