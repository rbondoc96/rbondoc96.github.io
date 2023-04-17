import styles from './styles/Work.module.scss';
import appTester from '@/assets/images/jobs/app-tester.png';
import aya from '@/assets/images/jobs/aya.png';
import labcorp from '@/assets/images/jobs/labcorp.png';
import personOnComputerAndPhone from '@/assets/images/jobs/person-on-computer-and-phone.png';
import personWorkingOnCircuits from '@/assets/images/jobs/person-working-on-circuits.png';
import raveon from '@/assets/images/jobs/raveon.png';
import sourcetoad from '@/assets/images/jobs/sourcetoad.png';
import toadOnComputer from '@/assets/images/jobs/toad-on-computer.png';
import Box from '@/components/Box';
import ExpandableCardList from '@/components/ExpandableCardList';
import type {ExpandedCardContent} from '@/components/ExpandableCardList/ExpandedCard';
import Heading from '@/components/Heading';
import Page from '@/components/Page';

const jobs: ExpandedCardContent[] = [
    {
        background: {
            alt: 'Toad working on a computer',
            src: toadOnComputer,
        },
        body: [
            'Write efficient, maintainable, and scalable code for a diverse group of clients',
            'Work with a variety of different languages, platforms, and frameworks such as TypeScript, PHP, React, Vue, and Laravel',
            'Communicate with a multidisciplinary team of developers, designers, and stakeholders on a daily basis',
        ],
        footer: 'May 2022',
        icon: {
            alt: 'Sourcetoad',
            src: sourcetoad,
        },
        layoutId: 'expandable-card-sourcetoad',
        link: {
            href: 'https://sourcetoad.com',
            label: 'View their site',
        },
        minorTitle: 'May 2022 - Present',
        subtitle: 'Sourcetoad',
        title: 'Software Engineer',
    },
    {
        background: {
            alt: 'Person performing testing on a mobile phone',
            src: appTester,
        },
        body: [
            'Tested web and mobile apps used in decentralized clinical trials to validate end-to-end functionality and compliance with HIPAA and 21 CFR Part 11 regulations',
            'Identified and reported system-level bugs and defects, leading to improvements across multiple projects',
            'Helped other software testers to use and understand commonly used testing utilities in Chrome DevTools and Android Studio',
        ],
        footer: 'January 2021',
        icon: {
            alt: 'Labcorp Drug Development',
            src: labcorp,
        },
        layoutId: 'expandable-card-labcorp',
        link: {
            href: 'https://drugdevelopment.labcorp.com/',
            label: 'View their site',
        },
        minorTitle: 'January 2021 - May 2022',
        subtitle: 'Labcorp Drug Development',
        title: 'Software QA Analyst',
    },
    {
        background: {
            alt: 'Person working on a computer while on the phone',
            src: personOnComputerAndPhone,
        },
        body: [
            'Increased overall quality and efficiency in producing medical documentation by automating tasks with JavaScript',
            'Improved usability and overall aesthetic of existing Excel and Powerpoint templates used to track data and generate reports',
            'Tracked and achieved compliance for hundreds of traveling healthcare professionals each month in the height of the COVID-19 pandemic',
        ],
        footer: 'December 2019',
        icon: {
            alt: 'Aya Healthcare',
            src: aya,
        },
        layoutId: 'expandable-card-aya',
        link: {
            href: 'https://www.ayahealthcare.com/',
            label: 'View their site',
        },
        minorTitle: 'December 2019 - December 2020',
        subtitle: 'Aya Healthcare',
        title: 'Compliance Specialist',
    },
    {
        background: {
            alt: 'Person working on circuits',
            src: personWorkingOnCircuits,
        },
        body: [
            'Ported and validated firmware written in C/C++ to allow for cheaper Linux machines to function as a gateway router',
            'Conducted research, integration, and testing of telemetry protocols such as MQTT and MODBUS to bring incorporate IoT protocols into the gateway product',
            'Improved documentation for the product by expanding upon old technical manuals and standardizing docblocks in the source code',
        ],
        footer: 'July 2019',
        icon: {
            alt: 'Raveon Technologies',
            src: raveon,
        },
        layoutId: 'expandable-card-raveon',
        link: {
            href: 'https://www.raveon.com/',
            label: 'View their site',
        },
        minorTitle: 'July 2019 - August 2019',
        subtitle: 'Raveon Technologies',
        title: 'Design Engineer',
    },
];

const WorkPage = () => (
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
                    Places I&apos;ve Worked At
                </Heading>

                <Box>
                    <ExpandableCardList cards={jobs} />
                </Box>
            </Box>
        </Page.Content>
    </Page>
);

export default WorkPage;
