import styled, { css } from 'styled-components';
import styledPropTypes from '@styled-system/prop-types';
import { IButtonProps } from './types';

import {
  layout,
  space,
  color,
  typography,
  background,
  shadow,
  border,
  buttonStyle,
  flexbox,
  variant,
  compose,
  system,
} from 'styled-system';
import { ifProp, prop } from 'styled-tools';

const styleProps = compose(
  flexbox,
  layout,
  space,
  color,
  typography,
  background,
  shadow,
  border,
  buttonStyle,
  variant({
    prop: 'size',
    scale: 'buttonSizes',
  }),
  system({
    backgroundImage: {
      property: 'backgroundImage',
      scale: 'colors',
    },
    cursor: true,
  }),
);

export const Button = styled.button<IButtonProps>`
  cursor: pointer;

  &:focus {
    outline: none;
  }

  ${ifProp(
    'ellipsis',
    css`
      text-overflow: ellipsis;
      overflow: hidden;
    `,
  )}
  ${ifProp(
    'fullWidth',
    css`
      width: 100%;
    `,
  )};
  ${ifProp(
    'fullHeight',
    css`
      height: 100%;
    `,
  )};
  ${ifProp(
    'isStretch',
    css`
      width: initial;
      height: initial;
    `,
  )};

  &:disabled {
    opacity: 0.25;
    cursor: not-allowed;
  }
  &:active {
    background-color: ${prop('activeBg')};
  }

  ${styleProps};
`;

Button.propTypes = {
  ...styledPropTypes.layout,
  ...styledPropTypes.space,
  ...styledPropTypes.color,
  ...styledPropTypes.typography,
  ...styledPropTypes.background,
  ...styledPropTypes.shadow,
  ...styledPropTypes.border,
  ...styledPropTypes.buttonStyle,
};
