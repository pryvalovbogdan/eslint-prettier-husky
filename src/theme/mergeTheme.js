import React from 'react';
import PropTypes from 'prop-types';
import { merge, get } from 'lodash';
import { baseTheme } from './theme';
import { ThemeProvider } from 'styled-components';
import { shallowEqual, useSelector } from 'react-redux';
import { selectorGetActiveTheme } from '../modules/app/selectors';

// merge the color mode with the base theme
// to create a new theme object
const getTheme = mode =>
  merge({}, baseTheme, {
    colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
  });

export const StyledTheme = ({ children }) => {
  // state for changing modes dynamically
  const mode = useSelector(selectorGetActiveTheme, shallowEqual);

  const theme = getTheme(mode);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

StyledTheme.propTypes = {
  children: PropTypes.object.isRequired,
};
