import type {PropsWithChildren} from 'react';
import {Link as TUILink} from 'theme-ui';

import type {
    BoxProps,
    EventProps,
    FlexProps,
    HTMLProps,
    LayoutProps,
    ThemeProps,
    TypographyProps,
} from '@/core/props';

type LinkProps = BoxProps &
    EventProps &
    FlexProps &
    HTMLProps &
    LayoutProps &
    ThemeProps &
    TypographyProps & {
        as?: never;
        href: string;
        rel?: 'noreferrer' | 'noopener' | 'noreferrer noopener';
        target?: '_blank' | '_self' | '_parent' | '_top';
    };

export const Link = ({
    className,
    children,
    color,
    href,
    id,
    onClick,
    onMouseDown,
    onMouseUp,
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
            onClick={onClick}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            rel={rel}
            target={target}
            variant={variant}
            sx={{
                color,
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
