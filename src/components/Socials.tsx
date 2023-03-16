import {
    FaBrandsGithub,
    FaBrandsLinkedinIn,
    FaSolidScroll,
    FaSolidEnvelope,
} from 'solid-icons/fa';
import type {Component} from 'solid-js';
import {mergeProps} from 'solid-js';
import {styled} from 'solid-styled-components';

import Sidebar from '@base/Sidebar';

const SocialsList = styled('ul')`
    display: flex;
    flex-direction: column;

    > *:not(:first-child) {
        margin-top: ${(props) => props.theme?.spacing[2]};
    }
`;

const SocialsListItem = styled('li')`
    transition-property: ${({theme}) => theme?.transitions.property.transform};
    transition-duration: ${({theme}) => theme?.transitions.duration[300]};
    transition-timing-function: ${({theme}) =>
        theme?.transitions.timingFunction.easeInOut};
    &:hover {
        transform: translateY(-${({theme}) => theme?.spacing['1.5']});
    }
    &:not(:hover) {
        transform: translateY(-${({theme}) => theme?.spacing[0]});
    }
`;

const SocialsLink = styled('a')`
    display: block;
    padding: ${({theme}) => theme?.spacing[2]};

    & > svg {
        transition-duration: ${({theme}) => theme?.transitions.duration[300]};
        transition-property: ${({theme}) =>
            theme?.transitions.property.colors};
        color: ${({theme}) => theme?.colors.white} !important;
    }

    &:hover > svg {
        color: ${({theme}) => theme?.colors.red} !important;
    }
`;

const Socials: Component<{
    size?: string | number;
}> = (baseProps) => {
    const props = mergeProps(
        {
            size: 20,
        },
        baseProps,
    );

    return (
        <Sidebar jsClass="js-socials" component="div" position="left">
            <div>
                <SocialsList>
                    <SocialsListItem>
                        <SocialsLink
                            aria-label="Email"
                            href="mailto:rbondoc96@gmail.com"
                        >
                            <FaSolidEnvelope size={props.size} />
                        </SocialsLink>
                    </SocialsListItem>

                    <SocialsListItem>
                        <SocialsLink
                            aria-label="Github"
                            href="https://github.com/rbondoc96"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaBrandsGithub size={props.size} />
                        </SocialsLink>
                    </SocialsListItem>

                    <SocialsListItem>
                        <SocialsLink
                            aria-label="LinkedIn"
                            href="https://linkedin.com/in/rbondoc96"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaBrandsLinkedinIn size={props.size} />
                        </SocialsLink>
                    </SocialsListItem>

                    <SocialsListItem>
                        <SocialsLink
                            aria-label="Resume"
                            href="/docs/resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaSolidScroll size={props.size} />
                        </SocialsLink>
                    </SocialsListItem>
                </SocialsList>
            </div>
        </Sidebar>
    );
};

export default Socials;
