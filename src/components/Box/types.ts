import React from 'react';

import {
  BackgroundProps,
  LayoutProps,
  ColorProps,
  SpaceProps,
  TypographyProps,
  ShadowProps,
  BorderProps,
  FlexboxProps,
  PositionProps,
} from 'styled-system';

export interface BoxProps
  extends BackgroundProps,
    LayoutProps,
    ColorProps,
    SpaceProps,
    ShadowProps,
    TypographyProps,
    BorderProps,
    FlexboxProps,
    PositionProps,
    ColorProps {
  children?: React.ReactNode;
}
