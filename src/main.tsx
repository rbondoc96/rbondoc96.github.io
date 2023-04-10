import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import {HelmetProvider} from 'react-helmet-async';
import {Global, ThemeProvider} from 'theme-ui';

import NavigationLinkProvider from '@/core/providers/NavigationLinkProvider';
import App from './App';
import {getTheme} from '@/core/theme';

const theme = getTheme();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <HelmetProvider>
            <NavigationLinkProvider>
                <ThemeProvider theme={theme}>
                    <Global
                        styles={{
                            'html': {
                                color: 'white',
                                fontFamily: 'Work Sans, sans-serif',
                                scrollBehavior: 'smooth',
                            },
                            'body': {
                                backgroundColor: 'dark',
                                height: '100%',
                                margin: 0,
                                padding: 0,
                            },
                            'a': {
                                color: 'inherit',
                                cursor: 'pointer',
                                textDecoration: 'none',
                            },
                            'button': {
                                backgroundColor: 'transparent',
                                cursor: 'pointer',
                            },
                            'ul, menu': {
                                margin: 0,
                                padding: 0,
                            },
                            'body.blur': {
                                'overflow': 'hidden',

                                '& #content > *': {
                                    filter: 'blur(4px)',
                                    pointerEvents: 'none',
                                    userSelect: 'none',
                                },
                            },
                        }}
                    />
                    <App />
                </ThemeProvider>
            </NavigationLinkProvider>
        </HelmetProvider>
    </StrictMode>,
);
