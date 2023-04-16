import {motion} from 'framer-motion';
import styles from '@/pages/styles/About.module.scss';
import {Page} from '@/components/base';
// import AboutSection from '@/components/pages/home/AboutSection';
// import Socials from '@/components/pages/home/Socials';
// import SectionNavigation from '@/components/pages/home/SectionNavigation';

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
            <motion.main
                className={styles.main}
                initial="hidden"
                animate="visible"
                exit={{
                    y: -100,
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
                <div>
                    <motion.h2
                        className="text-white text-5xl"
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
                    </motion.h2>
                </div>
            </motion.main>
        </Page.Content>
    </Page>
);

export default AboutPage;
