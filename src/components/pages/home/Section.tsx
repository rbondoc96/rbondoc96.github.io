import type {PropsWithChildren} from 'react';
import {Flex} from 'theme-ui';

import {Stack, Text} from '@/components/base';
import type {ComponentProps, MarginProps, StackProps} from '@/core/props';
import extractStyleProps from '@/core/utils/extractStyleProps';

type HeaderProps = MarginProps;

const Header = ({children, ...props}: PropsWithChildren<HeaderProps>) => {
    return (
        <Text
            as="h2"
            fontSize={{
                min: '3xl',
                max: '5xl',
                value: '5vw',
            }}
            fontWeight="semibold"
            letterSpacing="tightest"
            {...props}
        >
            {children}
        </Text>
    );
};

type SectionProps = ComponentProps & StackProps;

const _Section = ({
    animClass,
    children,
    id,
    space,
    ...props
}: PropsWithChildren<SectionProps>) => {
    const styleProps = extractStyleProps(props)[0];

    return (
        <Flex
            as="section"
            id={id}
            sx={{
                flexDirection: 'column',
                width: '100%',
                paddingY: [24, 28],
                minHeight: [null, 'screenHeight'],
                ...styleProps,
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
