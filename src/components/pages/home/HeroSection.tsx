import {Box, Button, Link, Stack, Text} from '@/components/base';
import {Section} from '@/components/pages/home/Section';
import type {AnimatedComponentProps} from '@/core/props';

type HeroSectionProps = AnimatedComponentProps;

const HeroSection = ({animClass}: HeroSectionProps) => (
    <Section animClass={animClass} space={['xl', '2xl']}>
        <Stack direction="column" space={['2', '4']}>
            <Text
                as="h3"
                color="blue"
                fontSize={['md', 'lg']}
                fontWeight="light"
                letterSpacing="wide"
                lineHeight="lg"
            >
                Hey there! My name is
            </Text>

            <Text
                as="h1"
                fontSize={{
                    min: '4xl',
                    max: '8xl',
                    value: '7vw',
                }}
                letterSpacing="tightest"
                sx={{
                    marginLeft: -1,
                }}
            >
                Rodrigo Bondoc
            </Text>

            <Text
                as="h2"
                fontSize={{
                    min: '2xl',
                    max: '6xl',
                    value: '4vw',
                }}
                fontWeight="light"
                letterSpacing="tight"
            >
                Software Engineer
            </Text>
        </Stack>

        <Stack direction="column" space="4">
            <Text
                as="span"
                fontSize={['md', 'lg']}
                fontWeight="light"
                letterSpacing="wide"
                lineHeight={['md', 'lg']}
            >
                I&apos;m a full-stack web and mobile app developer with a background in
                electrical engineering.
            </Text>
            <Text
                as="span"
                fontSize={['md', 'lg']}
                fontWeight="light"
                letterSpacing="wide"
                lineHeight={['md', 'lg']}
            >
                In other words, I joined the dark (soft) side.
            </Text>
        </Stack>

        <Stack direction="column" space={['xl', '2xl']}>
            <Box>
                <Link
                    color="white"
                    href="https://knowyourmeme.com/memes/come-to-the-dark-side"
                    target="_blank"
                    rel="noreferrer"
                    fontSize="sm"
                    fontStyle="italic"
                    variant="links.underline"
                >
                    Yes, they did have cookies.
                </Link>
            </Box>

            <Box>
                <Link display="inline-block" href="#home-about">
                    <Button size="md" variant="buttons.xFill">
                        Get to know me!
                    </Button>
                </Link>
            </Box>
        </Stack>
    </Section>
);

export default HeroSection;
