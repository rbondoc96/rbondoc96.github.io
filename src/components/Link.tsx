import type {ComponentPropsWithRef, PropsWithChildren} from 'react';
import type {Link as RouterLink, LinkProps as RouterLinkProps} from 'react-router-dom';
import styles from './styles/Link.module.scss';
import SolidButton from '@/components/SolidButton';

type LinkVariant = keyof typeof styles | 'button';

type LinkProps = {
    as?: 'a' | typeof RouterLink;
    variant?: LinkVariant;
} & (ComponentPropsWithRef<'a'> | RouterLinkProps);

export const Link = ({
    as: Tag = 'a',
    className,
    children,
    variant = 'unstyled',
    ...props
}: PropsWithChildren<LinkProps>) => {
    if (variant === 'button') {
        return <SolidButton as={Tag} {...props} />;
    }

    const composedStyles = [className, styles[variant]].filter(Boolean).join(' ');

    return Tag === 'a' ? (
        <a className={composedStyles} {...(props as ComponentPropsWithRef<'a'>)}>
            {children}
        </a>
    ) : (
        <Tag className={composedStyles} {...(props as RouterLinkProps)}>
            {children}
        </Tag>
    );
};

export default Link;
