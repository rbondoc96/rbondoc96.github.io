import {Image} from 'theme-ui';

import selfie from '@/assets/images/sourcetoad-1.jpg';
import cssLogo from '@/assets/images/tech/css3-logo.png';
import dockerLogo from '@/assets/images/tech/docker-logo.png';
import expressLogo from '@/assets/images/tech/express-logo.png';
import figmaLogo from '@/assets/images/tech/figma-logo.png';
import gitLogo from '@/assets/images/tech/git-logo.png';
import githubLogo from '@/assets/images/tech/github-logo.png';
import htmlLogo from '@/assets/images/tech/html5-logo.png';
import laravelLogo from '@/assets/images/tech/laravel-logo.png';
import mongoDBLogo from '@/assets/images/tech/mongodb-logo.png';
import nodeJsLogo from '@/assets/images/tech/node-logo.png';
import npmLogo from '@/assets/images/tech/npm-logo.png';
import phpLogo from '@/assets/images/tech/php-logo.png';
import postgresLogo from '@/assets/images/tech/postgres-logo.png';
import postmanLogo from '@/assets/images/tech/postman-logo.png';
import pythonLogo from '@/assets/images/tech/python-logo.png';
import reactLogo from '@/assets/images/tech/react-logo.png';
import rustLogo from '@/assets/images/tech/rust-logo.png';
import solidJsLogo from '@/assets/images/tech/solidjs-logo.png';
import tailwindLogo from '@/assets/images/tech/tailwind-logo.png';
import tsJsLogo from '@/assets/images/tech/ts-js-logo.png';
import viteLogo from '@/assets/images/tech/vite-logo.png';
import vsCodeLogo from '@/assets/images/tech/vscode-logo.png';
import vueLogo from '@/assets/images/tech/vue-logo.png';

import {Box, Grid, Link, Stack, Text} from '@/components/base';
import Section from '@/components/pages/home/Section';
import TechnologyCard from '@/components/pages/home/TechnologyCard';
import type {AnimatedComponentProps, HTMLProps} from '@/core/props';

type AboutSectionProps = AnimatedComponentProps & HTMLProps;

const AboutSection = ({animClass, id}: AboutSectionProps) => (
    <Section animClass={animClass} id={id} space="2xl">
        <Section.Header marginY="sm">Me, Myself & I</Section.Header>

        <Grid gridTemplateColumns={['1fr', '1fr', '1fr', '2fr 3fr']}>
            <Box
                display="flex"
                justifyContent={['center', 'center', 'center', 'flex-start']}
                minWidth="220px"
            >
                <Box width={['220px', '280px']}>
                    <Image
                        alt="Headshot"
                        src={selfie}
                        sx={{
                            display: 'block',
                            height: 'auto',
                            width: '100%',
                        }}
                    />
                </Box>
            </Box>

            <Stack direction="column" space="8">
                <Text as="p" variant="text.body">
                    Hello! I&apos;m Rodrigo, a full-stack software developer based in San
                    Diego, CA.
                </Text>

                <Text as="p" variant="text.body">
                    Since my time at San Diego State University, I&apos;ve had the
                    opportunity to work for a variety of companies in radio manufacturing,
                    travel nursing, and pharmaceutical drug{' '}
                    <Link href="#" variant="links.gradientUnderlineOnHover">
                        and pharmaceutical drug development
                    </Link>
                    .
                </Text>

                <Text as="p" variant="text.body">
                    I&apos;m naturally curious person. I love to learn new technologies
                    and understand how they work and the problems they aim to solve.
                </Text>
            </Stack>
        </Grid>

        <Stack direction="column" alignItems="center">
            <Text
                as="h3"
                fontSize={{
                    min: 'xl',
                    max: '2xl',
                    value: '4vw',
                }}
                marginY="xl"
            >
                Technologies I&apos;ve Worked With
            </Text>
            <Stack direction="row" flexWrap="wrap" justifyContent="center">
                <TechnologyCard
                    header="Frontend"
                    technologies={[
                        {src: reactLogo, alt: 'React / React Native'},
                        {src: solidJsLogo, alt: 'SolidJS'},
                        {src: vueLogo, alt: 'Vue.js'},
                        {src: tailwindLogo, alt: 'Tailwind CSS'},
                    ]}
                />

                <TechnologyCard
                    header="Backend"
                    technologies={[
                        {src: laravelLogo, alt: 'Laravel'},
                        {src: nodeJsLogo, alt: 'Node.js'},
                        {src: expressLogo, alt: 'Express.js'},
                        {src: postgresLogo, alt: 'PostgreSQL'},
                        {src: mongoDBLogo, alt: 'MongoDB'},
                    ]}
                />

                <TechnologyCard
                    header="Languages"
                    technologies={[
                        {src: htmlLogo, alt: 'HTML'},
                        {src: cssLogo, alt: 'CSS'},
                        {src: tsJsLogo, alt: 'TypeScript / JavaScript'},
                        {src: phpLogo, alt: 'PHP'},
                        {src: rustLogo, alt: 'Rust'},
                        {src: pythonLogo, alt: 'Python'},
                    ]}
                />

                <TechnologyCard
                    header="Devops"
                    technologies={[
                        {src: gitLogo, alt: 'Git'},
                        {src: githubLogo, alt: 'GitHub'},
                        {src: viteLogo, alt: 'Vite'},
                        {src: dockerLogo, alt: 'Docker'},
                        {src: npmLogo, alt: 'npm'},
                    ]}
                />

                <TechnologyCard
                    header="Tools"
                    technologies={[
                        {src: vsCodeLogo, alt: 'VS Code'},
                        {src: postmanLogo, alt: 'Postman'},
                        {src: figmaLogo, alt: 'Figma'},
                    ]}
                />
            </Stack>
        </Stack>
    </Section>
);

export default AboutSection;
