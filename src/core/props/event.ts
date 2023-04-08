import type {MouseEvent} from 'react';

export type EventProps = {
    onClick?: (event?: MouseEvent) => void;
    onMouseDown?: (event?: MouseEvent) => void;
    onMouseUp?: (event?: MouseEvent) => void;
};

export default EventProps;
