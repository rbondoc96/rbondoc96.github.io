import type {A11yProps} from './a11y';
import type {AnimatedProps} from './animation';
import type {BackgroundProps} from './background';
import type {BorderProps} from './border';
import type {BoxProps} from './box';
import type {EventProps} from './event';
import type {FilterProps} from './filter';
import type {FlexProps} from './flex';
import type {HTMLProps} from './html';
import type {InteractivityProps} from './interactivity';
import type {LayoutProps} from './layout';
import type {MarginProps} from './margin';
import type {PaddingProps} from './padding';
import type {PositioningProps} from './positioning';
import type {SizeProps} from './size';
import type {ThemeProps} from './theme';
import type {TypographyProps} from './typography';

export type ComponentProps = A11yProps &
    AnimatedProps &
    BackgroundProps &
    BorderProps &
    BoxProps &
    EventProps &
    FilterProps &
    FlexProps &
    HTMLProps &
    InteractivityProps &
    LayoutProps &
    MarginProps &
    PaddingProps &
    PositioningProps &
    SizeProps &
    ThemeProps &
    TypographyProps;

export default ComponentProps;
