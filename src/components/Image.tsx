import {motion} from 'framer-motion';
import type {ComponentPropsWithoutRef} from 'react';
import styles from './styles/Image.module.scss';

type ImageProps = {
    alt: string;
    className?: string;
    src: string;
} & ComponentPropsWithoutRef<typeof motion.img>;

export const Image = ({alt, className, src, ...props}: ImageProps) => {
    const composedStyles = [className, styles.image].filter(Boolean).join(' ');

    return <motion.img className={composedStyles} alt={alt} src={src} {...props} />;
};

export default Image;
