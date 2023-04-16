import styles from './styles/IconCard.module.scss';
import Box from '@/components/Box';
import Heading from '@/components/Heading';
import Image from '@/components/Image';

type Icon = {
    alt: string;
    label?: string;
    src: string;
};

type IconCardProps = {
    title: string;
    icons: Icon[];
};

export const IconCard = ({title, icons}: IconCardProps) => (
    <Box className={styles.iconCard}>
        <Heading as="h4" className={styles.iconCardTitle}>
            {title}
        </Heading>
        <Box className={styles.iconCardIcons}>
            {icons.map(({alt, label, src}) => (
                <Box key={alt} className={styles.iconCardIcon}>
                    <Image alt={alt} src={src} />
                    <Box className={styles.iconCardIconTooltip}>{label ?? alt}</Box>
                </Box>
            ))}
        </Box>
    </Box>
);

export default IconCard;
