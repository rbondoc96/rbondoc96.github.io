import React, {FunctionComponent} from 'react';
import Button from '@mui/material/Button';
import ThemeProvider from '@/core/theme/ThemeProvider';

const Sandbox: FunctionComponent = () => (
    <ThemeProvider>
        <Button variant="contained">Hello World!</Button>
    </ThemeProvider>
);

export default Sandbox;
