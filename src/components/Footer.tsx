import type {Component} from 'solid-js';

import themed from '@/theme/themed';

const Copyright = themed('p')((theme) => {
    return {
        color: theme.colors.white,
        textAlign: 'center',
        ...theme.typography.size.sm,
    };
});

const Footer: Component = () => {
    return (
        <footer>
            <Copyright>
                &copy; 2023 Rodrigo Bondoc. All rights reserved.
            </Copyright>
        </footer>
    );
};

export default Footer;
