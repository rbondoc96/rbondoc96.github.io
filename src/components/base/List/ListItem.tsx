import type {ParentComponent} from 'solid-js';
import {destructure} from '@solid-primitives/destructure';

import useThemed from '@/hooks/useThemed';
import type {ThemeStyles} from '@/hooks/useThemed';
import type {AnimatedComponentProps} from '@/types/animations';

export interface ListItemProps extends AnimatedComponentProps {
    rotate?: 'left' | 'right';
    style?: ThemeStyles;
}

const ListItem: ParentComponent<ListItemProps> = (props) => {
    const {rotate, style} = destructure(props);

    const LI = useThemed('li')((theme) => {
        const rotationDirection = rotate?.();
        const rotationStyle =
            rotationDirection === undefined
                ? ''
                : rotationDirection === 'left'
                ? ' rotate(180deg)'
                : ' rotate(0deg)';

        return {
            'transitionProperty': theme.transitions.property.transform,
            'transitionDuration': theme.transitions.duration[300],
            'transitionTimingFunction':
                theme.transitions.timingFunction.easeInOut,

            'writingMode':
                rotationDirection === undefined
                    ? 'horizontal-tb'
                    : 'vertical-rl',

            '&:hover': {
                transform: `translateY(-${theme.spacing[1]})` + rotationStyle,
            },

            '&:not(:hover)': {
                transform: 'translateY(0)' + rotationStyle,
            },

            ...style?.(),
        };
    });

    return <LI class={props.jsClass}>{props.children}</LI>;
};

export default ListItem;
