import {
    FaBrandsGithub,
    FaBrandsLinkedinIn,
    FaSolidScroll,
    FaSolidEnvelope,
} from 'solid-icons/fa';
import type {Component} from 'solid-js';
import {mergeProps} from 'solid-js';

import './index.css';

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
        <div class="socials js-socials">
            <ul class="inline-flex flex-col space-y-5">
                <li>
                    <a aria-label="Email" href="mailto:rbondoc96@gmail.com">
                        <FaSolidEnvelope
                            class="!text-light hover:!text-red transition-colors duration-300"
                            size={props.size}
                        />
                    </a>
                </li>

                <li>
                    <a
                        aria-label="Github"
                        href="https://github.com/rbondoc96"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaBrandsGithub
                            class="!text-light hover:!text-red transition-colors duration-300"
                            size={props.size}
                        />
                    </a>
                </li>

                <li>
                    <a
                        aria-label="LinkedIn"
                        href="https://linkedin.com/in/rbondoc96"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaBrandsLinkedinIn
                            class="!text-light hover:!text-red transition-colors duration-300"
                            size={props.size}
                        />
                    </a>
                </li>

                <li>
                    <a
                        aria-label="Resume"
                        href="/docs/resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaSolidScroll
                            class="!text-light hover:!text-red transition-colors duration-300"
                            size={props.size}
                        />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Socials;
