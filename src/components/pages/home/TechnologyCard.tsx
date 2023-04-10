import {Image} from 'theme-ui';
import {Box, Text} from '@/components/base';

type TechnologyCardProps = {
    header: string;
    technologies: Array<{
        src: string;
        alt: string;
    }>;
};

export const TechnologyCard = ({header, technologies}: TechnologyCardProps) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            backgroundColor="darkLight"
            borderRadius="md"
            borderColor="transparent"
            width="300px"
            margin="sm"
        >
            <Text
                as="div"
                textAlign="center"
                fontWeight="medium"
                textTransform="uppercase"
                paddingY="2"
                width="100%"
                backgroundColor="blueDark"
                borderTopLeftRadius="md"
                borderTopRightRadius="md"
                height="max"
            >
                {header}
            </Text>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexWrap="wrap"
                width="100%"
                flex="1"
                paddingY="sm"
                borderBottomLeftRadius="md"
                borderBottomRightRadius="md"
            >
                {technologies.map(({alt, src}) => (
                    <Box
                        alignItems="center"
                        key={`tech-card-${alt}`}
                        width="64px"
                        height="64px"
                        position="relative"
                        marginX="xs"
                        display="inline-flex"
                        _hover={{
                            '& .tech-tooltip': {
                                visibility: 'visible',
                                opacity: 1,
                            },
                        }}
                    >
                        <Image src={src} alt={alt} width="64px" sx={{display: 'block'}} />
                        <Box
                            as="span"
                            className="tech-tooltip"
                            position="absolute"
                            marginTop="1"
                            maxWidth="120px"
                            width="max"
                            paddingY="1"
                            paddingX="2"
                            textAlign="center"
                            zIndex="tooltip"
                            _after={{
                                content: '""',
                                position: 'absolute',
                                bottom: '100%',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                borderWidth: '5px',
                                borderStyle: 'solid',
                                borderBottomColor: 'red',
                                borderLeftColor: 'transparent',
                                borderRightColor: 'transparent',
                                borderTopColor: 'transparent',
                            }}
                            sx={{
                                visibility: 'hidden',
                                top: '100%',
                                left: '50%',
                                opacity: 0,
                                borderRadius: 'lg',
                                transform: 'translateX(-50%)',
                                backgroundColor: 'red',
                                transition: 'opacity 300ms ease-in-out',
                            }}
                        >
                            {alt}
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default TechnologyCard;
