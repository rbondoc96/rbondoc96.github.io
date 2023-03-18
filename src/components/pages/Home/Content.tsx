import type {ParentComponent} from 'solid-js';

import useThemed from '@/hooks/useThemed';
import type {AnimatedComponentProps} from '@/types/animations';

const Main = useThemed('main')((theme) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',

    [theme.screens.largerThan('md')]: {
        paddingLeft: theme.spacing[20],
        paddingRight: theme.spacing[20],
    },

    [theme.screens.smallerThan('md')]: {
        paddingLeft: theme.spacing[8],
        paddingRight: theme.spacing[8],
    },
}));

const Section = useThemed('section')((theme) => ({
    'display': 'flex',
    'flexDirection': 'column',
    'width': '100%',
    'paddingBottom': theme.spacing[28],
    'paddingTop': theme.spacing[28],

    '> *': {
        'flex': 1,
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'center',

        '> *': {
            display: 'flex',
            flexDirection: 'column',

            [theme.screens.largerThan('md')]: {
                paddingBottom: theme.spacing[8],
                paddingTop: theme.spacing[8],
            },

            [theme.screens.smallerThan('md')]: {
                paddingBottom: theme.spacing[6],
                paddingTop: theme.spacing[6],
            },
        },
    },

    [theme.screens.largerThan('md')]: {
        minHeight: '100vh',
    },
}));

const Content: ParentComponent<AnimatedComponentProps> = (props) => (
    <Main class={props.jsClass}>{props.children}</Main>
);

const ContentSection: ParentComponent<{id: string}> = (props) => {
    return (
        <Section id={props.id}>
            <div>
                <div>{props.children}</div>
            </div>
        </Section>
    );
};

export default Object.assign(Content, {
    Section: ContentSection,
});
