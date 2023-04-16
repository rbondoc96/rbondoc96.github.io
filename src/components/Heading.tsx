import {motion} from 'framer-motion';
import type {ComponentPropsWithRef, PropsWithChildren} from 'react';
import styles from './styles/Heading.module.scss';

type HeadingProps = {
    as: ('h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6') & keyof typeof styles;
    className?: string;
} & Omit<ComponentPropsWithRef<typeof motion.h1>, 'children'>;

export const Heading = ({
    as,
    children,
    className,
    ...props
}: PropsWithChildren<HeadingProps>) => {
    const composedStyles = [className, styles[as]].filter(Boolean).join(' ');

    switch (as) {
        case 'h1':
            return (
                <motion.h1 className={composedStyles} {...props}>
                    {children}
                </motion.h1>
            );
        case 'h2':
            return (
                <motion.h2 className={composedStyles} {...props}>
                    {children}
                </motion.h2>
            );
        case 'h3':
            return (
                <motion.h3 className={composedStyles} {...props}>
                    {children}
                </motion.h3>
            );
        case 'h4':
            return (
                <motion.h4 className={composedStyles} {...props}>
                    {children}
                </motion.h4>
            );
        case 'h5':
            return (
                <motion.h5 className={composedStyles} {...props}>
                    {children}
                </motion.h5>
            );
        case 'h6':
            return (
                <motion.h6 className={composedStyles} {...props}>
                    {children}
                </motion.h6>
            );
    }
};

export default Heading;
