import type {PropsWithChildren, MouseEvent} from 'react';
import {Button as TUIButton, type ThemeUIStyleObject} from 'theme-ui';

import type {HTMLProps, ThemeProps} from '@/core/props';

type ButtonProps = HTMLProps &
    ThemeProps & {
        link?: boolean;
        onClick?: (event?: MouseEvent) => void;
        size?: 'sm' | 'md' | 'lg';
        type?: 'button' | 'submit' | 'reset';
    };

export const Button = ({
    className,
    children,
    id,
    onClick,
    size = 'md',
    sx,
    type,
    variant,
}: PropsWithChildren<ButtonProps>) => {
    const buttonStylesBySize: ThemeUIStyleObject = {
        fontSize: 'md',
        paddingX: '6',
        paddingY: '5',
    };

    if (size === 'sm') {
        buttonStylesBySize.fontSize = 'sm';
        buttonStylesBySize.paddingX = '5';
        buttonStylesBySize.paddingY = '4';
    } else if (size === 'lg') {
        buttonStylesBySize.fontSize = 'lg';
        buttonStylesBySize.paddingX = '6';
        buttonStylesBySize.paddingY = '5';
    }

    return (
        <TUIButton
            className={className}
            id={id}
            onClick={onClick}
            type={type}
            variant={variant}
            sx={{
                fontFamily: 'inherit',
                ...buttonStylesBySize,
                ...sx,
            }}
        >
            {children}
        </TUIButton>
    );
};

export default Button;
