import {
    FaBrandsGithub,
    FaBrandsLinkedinIn,
    FaSolidScroll,
    FaSolidEnvelope,
} from 'solid-icons/fa';
import type {Component} from 'solid-js';

import List from '@base/List';
import Sidebar from '@base/Sidebar';
import useThemed from '@/hooks/useThemed';

const SocialsLink = useThemed('a')((theme) => ({
    'display': 'block',
    'padding': theme.spacing[2],

    '& > svg': {
        transitionDuration: theme.transitions.duration[300],
        transitionProperty: theme.transitions.property.colors,
        color: `${theme.colors.white} !important`,
    },

    '&:hover > svg': {
        color: `${theme.colors.red} !important`,
    },
}));

const Socials: Component = () => {
    return (
        <Sidebar jsClass="js-socials" position="left">
            <List space="2">
                <List.Item>
                    <SocialsLink
                        aria-label="Email"
                        href="mailto:rbondoc96@gmail.com"
                    >
                        <FaSolidEnvelope size={20} />
                    </SocialsLink>
                </List.Item>

                <List.Item>
                    <SocialsLink
                        aria-label="Github"
                        href="https://github.com/rbondoc96"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaBrandsGithub size={20} />
                    </SocialsLink>
                </List.Item>

                <List.Item>
                    <SocialsLink
                        aria-label="LinkedIn"
                        href="https://linkedin.com/in/rbondoc96"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaBrandsLinkedinIn size={20} />
                    </SocialsLink>
                </List.Item>

                <List.Item>
                    <SocialsLink
                        aria-label="Resume"
                        href="/docs/resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaSolidScroll size={20} />
                    </SocialsLink>
                </List.Item>
            </List>
        </Sidebar>
    );
};

export default Socials;
