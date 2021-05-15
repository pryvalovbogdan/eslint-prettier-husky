import React, { forwardRef, memo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import styledPropTypes from '@styled-system/prop-types';
import {
  typography,
  position,
  space,
  color,
  textStyle,
  colorStyle,
  layout,
  border,
  flexbox,
  compose,
  system,
} from 'styled-system';
import { ifProp } from 'styled-tools';
import { useThemeProps } from '../../hooks/useThemeProps';

export const themeProps = [
  'color',
  'fontSize',
  'fontWeight',
  'lineHeight',
  'paddingTop',
  'paddingBottom',
  'paddingLeft',
  'paddingRight',
];

const styleProps = compose(
  typography,
  position,
  space,
  border,
  color,
  layout,
  flexbox,
  textStyle,
  colorStyle,
  system({
    textTransform: true,
    wordWrap: true,
    whiteSpace: true,
    textOverflow: true,
    overflow: true,
    textDecoration: true,
    cursor: true,
  }),
);

const BaseText = styled.span`
  white-space: ${ifProp('nowrap', 'nowrap', 'normal')};
  ${styleProps};
`;

export const Text = memo(
  forwardRef((props, ref) => {
    // eslint-disable-next-line react/prop-types
    const { value, textTransform, children, ...rest } = props;
    // const theme = useThemeProps(themeProps, 'text');

    return (
      <BaseText
        ref={ref}
        // color={theme.color}
        // fontSize={theme.fontSize}
        // fontWeight={theme.fontWeight}
        // pt={theme.paddingTop}
        // pb={theme.paddingBottom}
        // pr={theme.paddingRight}
        // pl={theme.paddingLeft}
        textTransform={textTransform}
        {...rest}
      >
        {value || children}
      </BaseText>
    );
  }),
);

Text.displayName = 'Text';

Text.propTypes = {
  ...styledPropTypes.typography,
  ...styledPropTypes.space,
  ...styledPropTypes.color,
  caps: PropTypes.bool,
  regular: PropTypes.bool,
  bold: PropTypes.bool,
  as: PropTypes.string,
  value: PropTypes.string,
  textTransform: PropTypes.string,
};
