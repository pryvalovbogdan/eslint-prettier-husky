import React from 'react';

import { LayoutProps, ColorProps, SpaceProps, TypographyProps } from 'styled-system';

export interface AProps extends LayoutProps, ColorProps, SpaceProps, TypographyProps, ColorProps {
  children?: React.ReactNode;
}
