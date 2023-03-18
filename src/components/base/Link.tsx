import type {JSX, ParentComponent} from 'solid-js';
import {splitProps} from 'solid-js';
import {destructure} from '@solid-primitives/destructure';

import useThemed from '@/hooks/useThemed';

type AnchorProps = JSX.IntrinsicElements['a'];

interface LinkProps extends AnchorProps {
    variant?: 'unstyled' | 'default';
}

const Link: ParentComponent<LinkProps> = (props) => {
    const [local, others] = splitProps(props, ['children', 'variant']);
    const {variant} = destructure(local);

    const A = useThemed('a')((theme) => {
        const componentVariant = variant?.();
        switch (componentVariant) {
            case undefined: {
                return {
                    'color': theme.colors.white,
                    'transitionProperty': theme.transitions.property.colors,
                    'transitionDuration': theme.transitions.duration[300],

                    '&:hover': {
                        color: theme.colors.red,
                    },
                };
            }
            case 'unstyled': {
                return {};
            }
            case 'default': {
                return {
                    'color': theme.colors.white,
                    'transitionProperty': theme.transitions.property.colors,
                    'transitionDuration': theme.transitions.duration[300],

                    '&:hover': {
                        color: theme.colors.red,
                    },
                };
            }
            default: {
                return {
                    'color': theme.colors.white,
                    'transitionProperty': theme.transitions.property.colors,
                    'transitionDuration': theme.transitions.duration[300],

                    '&:hover': {
                        color: theme.colors.red,
                    },
                };
            }
        }
    });

    return <A {...others}>{local.children}</A>;
};

export default Link;
