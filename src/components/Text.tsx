import {motion} from 'framer-motion';
import type {ComponentPropsWithoutRef, PropsWithChildren} from 'react';
// import styles from './styles/Text.module.scss';

type TextElement = 'p' | 'span' | 'div' | 'code' | 'strong' | 'em';

type TextProps<TElement extends TextElement> = {
    as: TElement;
    className?: string;
} & Omit<ComponentPropsWithoutRef<(typeof motion)[TElement]>, 'children'>;

export const Text = <TElement extends TextElement>({
    as,
    children,
    className,
    ...props
}: PropsWithChildren<TextProps<TElement>>) => {
    const composedStyles = [className].filter(Boolean).join(' ');

    switch (as) {
        case 'p':
            return (
                <motion.p className={composedStyles} {...props}>
                    {children}
                </motion.p>
            );
        case 'span':
            return (
                <motion.span className={composedStyles} {...props}>
                    {children}
                </motion.span>
            );
        case 'div':
            return (
                <motion.div className={composedStyles} {...props}>
                    {children}
                </motion.div>
            );
        case 'code':
            return (
                <motion.code className={composedStyles} {...props}>
                    {children}
                </motion.code>
            );
        case 'strong':
            return (
                <motion.strong className={composedStyles} {...props}>
                    {children}
                </motion.strong>
            );
        default: {
            return (
                <motion.span className={composedStyles} {...props}>
                    {children}
                </motion.span>
            );
        }
    }
};

export default Text;
