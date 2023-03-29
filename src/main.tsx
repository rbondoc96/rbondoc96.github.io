import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';

import {Global, ThemeProvider} from 'theme-ui';
import App from './App';
import {getTheme} from '@/core/theme';

const theme = getTheme();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <Global
                styles={{
                    html: {
                        fontFamily: 'Work Sans, sans-serif',
                        scrollBehavior: 'smooth',
                    },
                    body: {
                        backgroundColor: 'dark',
                        height: '100%',
                        margin: 0,
                        padding: 0,
                    },
                    button: {
                        backgroundColor: 'transparent',
                        cursor: 'pointer',
                    },
                    ul: {
                        margin: 0,
                        padding: 0,
                    },
                }}
            />
            <App />
        </ThemeProvider>
    </StrictMode>,
);
