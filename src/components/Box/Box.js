import styled from 'styled-components';
import styledPropTypes from '@styled-system/prop-types';
import {
  space,
  layout,
  color,
  typography,
  position,
  border,
  shadow,
  flexbox,
  system,
  compose,
} from 'styled-system';

const styleProps = compose(
  space,
  layout,
  color,
  typography,
  position,
  border,
  shadow,
  flexbox,
  system({
    visibility: true,
    wordWrap: true,
    cursor: true,
    transition: true,
    transform: true,
    columnCount: true,
    columnWidth: true,
    columnGap: true,
  }),
);

export const Box = styled.div(styleProps);

Box.displayName = 'Box';

export const boxPropTypes = {
  ...styledPropTypes.space,
  ...styledPropTypes.width,
  ...styledPropTypes.color,
  ...styledPropTypes.textAlign,
};

Box.propTypes = boxPropTypes;
