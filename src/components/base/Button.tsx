import type {PropsWithChildren} from 'react';
import {Button as TUIButton, type ThemeUIStyleObject} from 'theme-ui';

import type {ComponentProps} from '@/core/props';
import extractStyleProps from '@/core/utils/extractStyleProps';

type ButtonComponentProps = ComponentProps & {
    link?: boolean;
    size?: 'sm' | 'md' | 'lg';
    type?: 'button' | 'submit' | 'reset';
};

export const Button = ({
    className,
    children,
    display,
    id,
    onClick,
    onMouseDown,
    onMouseUp,
    size = 'md',
    sx,
    type,
    variant,
    zIndex,
    ...props
}: PropsWithChildren<ButtonComponentProps>) => {
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

    const styleProps = extractStyleProps(props)[0];

    return (
        <TUIButton
            className={className}
            id={id}
            onClick={onClick}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            type={type}
            sx={{
                display,
                fontFamily: 'inherit',
                zIndex,
                ...buttonStylesBySize,
                ...styleProps,
                ...sx,
            }}
            variant={variant}
        >
            {children}
        </TUIButton>
    );
};

export default Button;
