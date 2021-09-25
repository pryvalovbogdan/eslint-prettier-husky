import { memo } from 'react';
import styled from 'styled-components';
import { space, color, typography, layout, compose, system } from 'styled-system';
import { AProps } from './types';

export const A = memo<AProps>(
  styled.a(
    compose(
      typography,
      space,
      layout,
      color,
      system({
        textDecoration: true,
      }),
    ),
  ),
);
