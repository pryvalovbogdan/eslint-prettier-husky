import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, GlobalStyles, Title } from './styledComponents';

const propTypes = {
  component: PropTypes.bool,
  sone: PropTypes.bool,
};

export const Layout = memo(props => {
  const some = props?.sone;

  return (
    <Wrapper>
      <Title>Layout</Title>
      {some}
      <GlobalStyles />
    </Wrapper>
  );
});

Layout.propTypes = propTypes;
