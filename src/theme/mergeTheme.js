import { merge, get } from 'lodash';
import { baseTheme } from './theme';
import { getThemeComponents } from './themeComponents';

// options for different color modes
const modes = ['light', 'dark'];

// merge the color mode with the base theme
// to create a new theme object

// const themeComponents = getThemeComponents(baseTheme);

const getTheme = mode =>
  merge({}, baseTheme, {
    colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
  });

export const theme = getTheme(modes[1]);
