import type {PropsWithChildren} from 'react';
import {Grid as TUIGrid} from 'theme-ui';

import type {ResponsiveThemePropertyKey, ResponsiveValue} from '@/core/lib/types';
import type {ComponentProps} from '@/core/props';
import extractStyleProps from '@/core/utils/extractStyleProps';

type GridProps = ComponentProps & {
    gap?: ResponsiveThemePropertyKey<'space'>;
    gridTemplateColumns: ResponsiveValue<string>;
};

export const Grid = ({
    as = 'div',
    children,
    className,
    gap,
    gridTemplateColumns,
    id,
    sx,
    tabIndex,
    variant,
    _hover,
    _focus,
    ...props
}: PropsWithChildren<GridProps>) => {
    const styleProps = extractStyleProps(props)[0];

    return (
        <TUIGrid
            as={as}
            className={className}
            columns={gridTemplateColumns}
            id={id}
            gap={gap}
            tabIndex={tabIndex}
            variant={variant}
            sx={{
                '&:hover': {
                    ..._hover,
                },
                '&:focus': {
                    ..._focus,
                },

                ...styleProps,
                ...sx,
            }}
        >
            {children}
        </TUIGrid>
    );
};

export default Grid;
