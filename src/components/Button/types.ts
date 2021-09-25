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
} from 'styled-system';

export interface ButtonProps
  extends BackgroundProps,
    LayoutProps,
    ColorProps,
    SpaceProps,
    ShadowProps,
    TypographyProps,
    BorderProps,
    FlexboxProps,
    ColorProps {
  children?: React.ReactNode;
}
