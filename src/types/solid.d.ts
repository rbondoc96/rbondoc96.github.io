import 'solid-styled-components';

import type Theme from '@/types/theme';

declare module 'solid-styled-components' {
    export interface DefaultTheme extends Theme {}
}
