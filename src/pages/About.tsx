import styles from './styles/About.module.scss';

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

import Box from '@/components/Box';
import Heading from '@/components/Heading';
import IconCard from '@/components/IconCard';
import Image from '@/components/Image';
import Page from '@/components/Page';
import Text from '@/components/Text';

const AboutPage = () => (
    <Page
        seo={{
            author: 'Rodrigo Bondoc',
            description:
                'Rodrigo Bondoc is a software engineer who specializes in building full-stack web and mobile applications.',
            title: 'Rodrigo Bondoc',
            _twitter: {
                card: 'summary',
                creator: '@rbondoc96',
            },
        }}
    >
        <Page.Content>
            <Box
                as="main"
                className={styles.main}
                initial="hidden"
                animate="visible"
                exit={{
                    opacity: 0,
                    transition: {
                        duration: 1,
                    },
                }}
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.3,
                        },
                    },
                }}
            >
                <Heading
                    as="h2"
                    className={styles.title}
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: 20,
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.75,
                            },
                        },
                    }}
                >
                    Me, Myself & I
                </Heading>
                <Box
                    className={styles.info}
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: 20,
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.75,
                            },
                        },
                    }}
                >
                    <Box className={styles.selfieContainer}>
                        <Box className={styles.selfie}>
                            <Image alt="Headshot" src={selfie} />
                        </Box>
                    </Box>

                    <Box className={styles.infoTextContainer}>
                        <Text as="p">
                            Hello! I&apos;m Rodrigo, a full-stack software developer based
                            in San Diego, CA.
                        </Text>

                        <Text as="p">
                            Since my time at San Diego State University, I&apos;ve had the
                            opportunity to work for a variety of companies in radio
                            manufacturing, travel nursing, and pharmaceutical drug
                            development.
                        </Text>

                        <Text as="p">
                            I&apos;m naturally curious person. I love to learn new
                            technologies to understand how they work and the problems they
                            aim to solve.
                        </Text>
                    </Box>
                </Box>

                <Box
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: 20,
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.75,
                            },
                        },
                    }}
                >
                    <Heading as="h3" className={styles.technologiesTitle}>
                        Technologies I&apos;ve Worked With
                    </Heading>
                    <Box className={styles.technologies}>
                        <IconCard
                            title="Frontend"
                            icons={[
                                {src: reactLogo, alt: 'React / React Native'},
                                {src: solidJsLogo, alt: 'SolidJS'},
                                {src: vueLogo, alt: 'Vue.js'},
                                {src: tailwindLogo, alt: 'Tailwind CSS'},
                            ]}
                        />

                        <IconCard
                            title="Backend"
                            icons={[
                                {src: laravelLogo, alt: 'Laravel'},
                                {src: nodeJsLogo, alt: 'Node.js'},
                                {src: expressLogo, alt: 'Express.js'},
                                {src: postgresLogo, alt: 'PostgreSQL'},
                                {src: mongoDBLogo, alt: 'MongoDB'},
                            ]}
                        />

                        <IconCard
                            title="Languages"
                            icons={[
                                {src: htmlLogo, alt: 'HTML'},
                                {src: cssLogo, alt: 'CSS'},
                                {src: tsJsLogo, alt: 'TypeScript / JavaScript'},
                                {src: phpLogo, alt: 'PHP'},
                                {src: rustLogo, alt: 'Rust'},
                                {src: pythonLogo, alt: 'Python'},
                            ]}
                        />

                        <IconCard
                            title="Devops"
                            icons={[
                                {src: gitLogo, alt: 'Git'},
                                {src: githubLogo, alt: 'GitHub'},
                                {src: viteLogo, alt: 'Vite'},
                                {src: dockerLogo, alt: 'Docker'},
                                {src: npmLogo, alt: 'npm'},
                            ]}
                        />

                        <IconCard
                            title="Tools"
                            icons={[
                                {src: vsCodeLogo, alt: 'VS Code'},
                                {src: postmanLogo, alt: 'Postman'},
                                {src: figmaLogo, alt: 'Figma'},
                            ]}
                        />
                    </Box>
                </Box>
            </Box>
        </Page.Content>
    </Page>
);

export default AboutPage;
