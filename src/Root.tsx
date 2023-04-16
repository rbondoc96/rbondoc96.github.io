import '@/styles/index.css';
import {StrictMode} from 'react';
import {HelmetProvider} from 'react-helmet-async';
import {BrowserRouter} from 'react-router-dom';
import App from '@/App';

const Root = () => (
    <StrictMode>
        <HelmetProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </HelmetProvider>
    </StrictMode>
);

export default Root;
