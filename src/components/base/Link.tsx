import type {PropsWithChildren} from 'react';
import {Link as TUILink, type ThemeUIStyleObject} from 'theme-ui';

import type {
    BoxProps,
    HTMLProps,
    ThemeProps,
    TypographyProps,
} from '@/core/props';

type LinkProps = BoxProps &
    HTMLProps &
    ThemeProps &
    TypographyProps & {
        as?: never;
        href: string;
        rel?: 'noreferrer' | 'noopener';
        target?: '_blank' | '_self' | '_parent' | '_top';
    };

export const Link = ({
    className,
    children,
    href,
    id,
    rel,
    sx,
    target,
    variant,
    _hover,
    ...props
}: PropsWithChildren<LinkProps>) => {
    return (
        <TUILink
            className={className}
            href={href}
            id={id}
            target={target}
            rel={rel}
            variant={variant}
            sx={{
                'color': 'white',
                'cursor': 'pointer',
                'transition': 'color300',
                ...props,

                '&:hover': {
                    ..._hover,
                },

                ...sx,
            }}
        >
            {children}
        </TUILink>
    );
};

export default Link;
