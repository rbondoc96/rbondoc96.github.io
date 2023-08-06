import {Link, Meta, Title} from '@solidjs/meta';
import {type Component, Index, mergeProps, Show, splitProps} from 'solid-js';

import OpenGraphHelmet from '@/components/Helmet/OpenGraphHelmet';
import TwitterCardHelmet from '@/components/Helmet/TwitterCardHelmet';
import type {
    LinkAttribute,
    OpenGraphAttributes,
    TwitterCardAttributes,
} from '@/components/Helmet/types';

export type HelmetProps = {
    author?: string;
    description?: string;
    image?: string;
    title?: string;
    links?: LinkAttribute[];
} & OpenGraphAttributes & TwitterCardAttributes;

const Helmet: Component<HelmetProps> = baseProps => {
    const props = mergeProps(
        {
            links: [],
        },
        baseProps,
    );

    const [openGraphProps, others] = splitProps(props, [
        'og:description',
        'og:image',
        'og:locale',
        'og:title',
        'og:type',
        'og:url',
    ]);

    const [twitterCardProps, rest] = splitProps(others, [
        'twitter:card',
        'twitter:creator',
        'twitter:description',
        'twitter:image',
        'twitter:image:alt',
        'twitter:site',
        'twitter:title',
    ]);

    return (
        <>
            <Show when={rest.title} keyed>
                {title => <Title>{title}</Title>}
            </Show>
            
            <Index each={rest.links}>{link => <Link {...link()} />}</Index>
            
            <Show when={rest.author} keyed>
                {author => <Meta name="author" content={author} />}
            </Show>

            <Show when={rest.description} keyed>
                {description => <Meta name="description" content={description} />}
            </Show>

            <Show when={rest.image} keyed>
                {image => <Meta name="image" content={image} />}
            </Show>

            <OpenGraphHelmet {...openGraphProps} />

            <TwitterCardHelmet {...twitterCardProps} />
        </>
    );
};

export default Helmet;
