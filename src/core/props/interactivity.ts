import type {CSSProperties} from 'react';

import type {KeysOf} from '@/core/lib/types';

export type InteractivityProps = {
    cursor?: CSSProperties['cursor'];
    pointerEvents?: CSSProperties['pointerEvents'];
    userSelect?: CSSProperties['userSelect'];
};

export const InteractivityPropNames: KeysOf<InteractivityProps> = {
    cursor: true,
    pointerEvents: true,
    userSelect: true,
};

export default InteractivityProps;
