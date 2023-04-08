import type {PropsWithChildren} from 'react';
import {Link as TUILink} from 'theme-ui';

import type {ComponentProps, VariantProp} from '@/core/props';
import extractStyleProps from '@/core/utils/extractStyleProps';

type LinkProps = ComponentProps &
    VariantProp<'links'> & {
        as?: never;
        href: string;
        rel?: 'noreferrer' | 'noopener' | 'noreferrer noopener';
        target?: '_blank' | '_self' | '_parent' | '_top';
    };

export const Link = ({
    animClass,
    className,
    children,
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
    const styleProps = extractStyleProps(props)[0];

    return (
        <TUILink
            className={[animClass, className].filter(Boolean).join(' ')}
            href={href}
            id={id}
            onClick={onClick}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            rel={rel}
            target={target}
            variant={variant}
            sx={{
                '&:hover': {
                    ..._hover,
                },

                ...styleProps,
                ...sx,
            }}
        >
            {children}
        </TUILink>
    );
};

export default Link;
