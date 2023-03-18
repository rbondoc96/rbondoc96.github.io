import type {ParentComponent} from 'solid-js';
import {destructure} from '@solid-primitives/destructure';

import ListItem from './ListItem';
import useThemed from '@/hooks/useThemed';
import type {AnimatedComponentProps} from '@/types/animations';
import type {SpacingOption} from '@/types/theme';

interface ListProps extends AnimatedComponentProps {
    direction?: 'row' | 'column';
    space?: SpacingOption | `${SpacingOption}`;
}

const List: ParentComponent<ListProps> = (props) => {
    const {direction, space} = destructure(props);

    const UL = useThemed('ul')((theme) => {
        const flexDirection = direction?.() ?? 'column';
        const spacing = space?.();
        const spacingDirection =
            flexDirection === 'column' ? 'marginTop' : 'marginLeft';

        return {
            'display': 'flex',
            flexDirection,

            'li:not(:first-child)': {
                [spacingDirection]:
                    spacing !== undefined ? theme.spacing[spacing] : 0,
            },
        };
    });

    return <UL class={props.jsClass}>{props.children}</UL>;
};

export default Object.assign(List, {
    Item: ListItem,
});
