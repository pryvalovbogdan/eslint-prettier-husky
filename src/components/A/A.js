import { memo } from 'react';
import styled from 'styled-components';
import { space, color, typography, layout, compose, system } from 'styled-system';

export const A = memo(
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
