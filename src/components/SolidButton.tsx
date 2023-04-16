import type {ComponentPropsWithRef, PropsWithChildren} from 'react';
import type {Link, LinkProps} from 'react-router-dom';
import styles from '@/components/styles/SolidButton.module.scss';

type ButtonProps = {
    as?: 'a' | 'button' | typeof Link;
} & (ComponentPropsWithRef<'a'> | ComponentPropsWithRef<'button'> | LinkProps);

export const Button = ({
    as: Tag = 'button',
    children,
    ...props
}: PropsWithChildren<ButtonProps>) => {
    if (Tag === 'a') {
        return (
            <a className={styles.solidButton} {...(props as ComponentPropsWithRef<'a'>)}>
                {children}
            </a>
        );
    }

    if (Tag === 'button') {
        return (
            <button
                className={styles.solidButton}
                {...(props as ComponentPropsWithRef<'button'>)}
            >
                {children}
            </button>
        );
    }

    return (
        <Tag className={styles.solidButton} {...(props as LinkProps)}>
            {children}
        </Tag>
    );
};

export default Button;
