import styled from 'styled-components';
import styledPropTypes from '@styled-system/prop-types';
import { flexbox } from 'styled-system';

import { Box, boxPropTypes } from '../../src/components/Box/Box';

export const Flex = styled(Box)(
  {
    display: 'flex',
  },
  flexbox,
);

Flex.propTypes = {
  ...boxPropTypes,
  ...styledPropTypes.flexbox,
};

Flex.displayName = 'Flex';
