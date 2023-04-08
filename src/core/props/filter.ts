import type {KeysOf, ResponsiveCSSProperty} from '@/core/lib/types';

/**
 *
 */
export type FilterProps = {
    /**
     * Applies graphical effects such as blurring or color shifting to the area behind an element.
     * Because it applies to everything behind the element, the element or its background should at least be partially transparent
     * to see the effect.
     *
     * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter}
     */
    backdropFilter?: ResponsiveCSSProperty<'backdropFilter'>;
    filter?: ResponsiveCSSProperty<'filter'>;
};

export const FilterPropNames: KeysOf<FilterProps> = {
    backdropFilter: true,
    filter: true,
};

export default FilterProps;
