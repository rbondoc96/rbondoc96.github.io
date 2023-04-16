import {motion} from 'framer-motion';
import type {ComponentPropsWithoutRef, PropsWithChildren} from 'react';
// import styles from './styles/Box.module.scss';

type BoxElement = 'div' | 'section' | 'span' | 'article' | 'main' | 'aside';

type BoxProps<TElement extends BoxElement> = {
    as?: TElement;
    className?: string;
} & Omit<ComponentPropsWithoutRef<(typeof motion)[TElement]>, 'children'>;

export const Box = <TElement extends BoxElement>({
    as,
    children,
    className,
    ...props
}: PropsWithChildren<BoxProps<TElement>>) => {
    const composedStyles = [className].filter(Boolean).join(' ');

    switch (as) {
        case 'div':
            return (
                <motion.div className={composedStyles} {...props}>
                    {children}
                </motion.div>
            );
        case 'section':
            return (
                <motion.section className={composedStyles} {...props}>
                    {children}
                </motion.section>
            );
        case 'article':
            return (
                <motion.article className={composedStyles} {...props}>
                    {children}
                </motion.article>
            );
        case 'main':
            return (
                <motion.main className={composedStyles} {...props}>
                    {children}
                </motion.main>
            );
        case 'aside':
            return (
                <motion.aside className={composedStyles} {...props}>
                    {children}
                </motion.aside>
            );
        default:
            return (
                <motion.div className={composedStyles} {...props}>
                    {children}
                </motion.div>
            );
    }
};

export default Box;
