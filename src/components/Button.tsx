import {motion} from 'framer-motion';
import type {ComponentPropsWithRef, PropsWithChildren} from 'react';
import styles from './styles/Button.module.scss';

type ButtonVariant = 'unstyled' & keyof typeof styles;

type ButtonProps = {
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    variant?: ButtonVariant;
} & Omit<ComponentPropsWithRef<typeof motion.button>, 'children'>;

export const Button = ({
    className,
    children,
    type,
    variant = 'unstyled',
    ...props
}: PropsWithChildren<ButtonProps>) => {
    const composedStyles = [className, styles[variant]].filter(Boolean).join(' ');

    return (
        <motion.button className={composedStyles} type={type} {...props}>
            {children}
        </motion.button>
    );
};

export default Button;
