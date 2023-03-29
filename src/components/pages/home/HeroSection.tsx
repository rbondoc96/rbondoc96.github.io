import {Box, Button, FluidText, Link, Stack, Text} from '@/components/base';
import {Section} from '@/components/pages/home/Section';
import type {AnimatedComponentProps} from '@/core/props';

type HeroSectionProps = AnimatedComponentProps;

const HeroSection = ({animClass}: HeroSectionProps) => (
    <Section animClass={animClass} space={['lg', 'xl']}>
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

            <FluidText
                as="h1"
                fontSize={{
                    min: '5xl',
                    max: '8xl',
                    value: '7vw',
                }}
                letterSpacing="tightest"
                marginLeft="-1"
            >
                Rodrigo Bondoc
            </FluidText>

            <FluidText
                as="h2"
                fontSize={{
                    min: '3xl',
                    max: '6xl',
                    value: '4vw',
                }}
                fontWeight="light"
                letterSpacing="tight"
            >
                Software Engineer
            </FluidText>
        </Stack>

        <Stack direction="column" space="4">
            <Text
                as="span"
                fontSize={['sm', 'lg']}
                fontWeight="light"
                letterSpacing="wide"
                lineHeight={['md', 'lg']}
            >
                I'm a full-stack web and mobile app developer with a background
                in electrical engineering.
            </Text>
            <Text
                as="span"
                fontSize={['sm', 'lg']}
                fontWeight="light"
                letterSpacing="wide"
            >
                In other words, I joined the dark (soft) side.
            </Text>
        </Stack>

        <Stack direction="column" space={['lg', 'xl']}>
            <Box>
                <Link
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
