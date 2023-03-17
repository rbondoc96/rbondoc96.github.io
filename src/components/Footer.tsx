import type {Component} from 'solid-js';

import themed, {transform} from '@/theme/themed';

const Copyright = themed('p')((theme) => {
    return {
        color: theme.colors.white,
        textAlign: 'center',
        ...theme.typography.size.sm,
    };
});

const Footer: Component = () => {
    const CopyrightLink = transform(Copyright, 'a');

    return (
        <footer>
            <CopyrightLink>
                &copy; 2023 Rodrigo Bondoc. All rights reserved.
            </CopyrightLink>
        </footer>
    );
};

export default Footer;
