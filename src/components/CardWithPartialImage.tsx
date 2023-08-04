import styles from './styles/CardWithPartialImage.module.scss';
import Box from '@/components/Box';
import IconLink from '@/components/IconLink';
import Image, {type ImageProps} from '@/components/Image';

type CardWithPartialImageProps = {
    body: string;
    image: ImageProps;
    imagePosition?: 'left' | 'right';
    title: string;
    titleOverline?: string;
};

export const CardWithPartialImage = ({
    image,
    imagePosition = 'right',
    title,
    titleOverline,
}: CardWithPartialImageProps) => {
    return (
        <Box>
            <Image {...image} />
        </Box>
    );
};

export default CardWithPartialImage;
