import type {CSSProperties, PropsWithChildren} from 'react';
import {Flex} from 'theme-ui';

import {FluidText, Stack} from '@/components/base';
import {AnimatedComponentProps} from '@/core/props';

const Header = ({children}: PropsWithChildren) => {
    return (
        <FluidText
            fontSize={{
                min: '3xl',
                max: '5xl',
                value: '5vw',
            }}
            fontWeight="semibold"
            letterSpacing="tightest"
        >
            {children}
        </FluidText>
    );
};

type SectionProps = AnimatedComponentProps & {
    id?: string;
    space?:
        | CSSProperties['marginTop']
        | Array<CSSProperties['marginTop'] | null>;
};

const _Section = ({
    animClass,
    children,
    id,
    space,
}: PropsWithChildren<SectionProps>) => {
    return (
        <Flex
            as="section"
            id={id}
            sx={{
                flexDirection: 'column',
                width: '100%',
                paddingY: ['12', '28'],
                minHeight: [null, 'screenHeight'],
            }}
        >
            <Flex
                sx={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingY: [6, 8],
                }}
            >
                <Stack animClass={animClass} direction="column" space={space}>
                    {children}
                </Stack>
            </Flex>
        </Flex>
    );
};

export const Section = Object.assign(_Section, {
    Header,
});

export default Section;
