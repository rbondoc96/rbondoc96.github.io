import borders from './borders';
import colors from './colors';
import opacities from './opacities';
import radii from './radii';
import shadows from './shadows';
import sizes from './sizes';
import space from './space';
import transitions from './transitions';
import typography from './typography';
import zIndices from './zIndices';

const tokens = {
    borderStyles: borders.borderStyles,
    borderWidths: borders.borderWidths,
    colors,
    fonts: typography.fonts,
    fontSizes: typography.fontSizes,
    fontWeights: typography.fontWeights,
    letterSpacings: typography.letterSpacings,
    lineHeights: typography.lineHeights,
    opacities,
    radii,
    shadows,
    sizes,
    space,
    transitions,
    zIndices,
};

export default tokens;
