import React, { memo } from 'react';
import { Wrapper, GlobalStyles, Title } from './styledComponents';

export const Layout = memo((props) => {
  const some = props?.sone;
  return (
    <Wrapper>
      <Title>
        Layout
      </Title>
      {some}
      <GlobalStyles
      />
    </Wrapper>
  );
});
