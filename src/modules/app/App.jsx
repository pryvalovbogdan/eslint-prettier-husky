import React, { memo, useCallback, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { When, If } from 'react-if';

import { Wrapper, GlobalStyles, Title, ResetButton } from './styledComponents';
import { NewsWrapper } from './components/styledComponents';
import { selectorGetIsAppInit, selectorGetDataToDisplay } from './selectors';
import { actionAppPageInit, actionAppPageReset } from './actions';
import { NewsComponent } from './components/NewsComponent';

export const App = memo(() => {
  const dispatch = useDispatch();

  const { isLoaded, dataToDisplay } = useSelector(
    createStructuredSelector({
      isLoaded: selectorGetIsAppInit,
      dataToDisplay: selectorGetDataToDisplay,
    }),
    shallowEqual,
  );

  const resetStore = useCallback(() => {
    dispatch(actionAppPageReset());
  }, [dispatch]);

  const pageInit = useCallback(() => {
    dispatch(actionAppPageInit());
  }, [dispatch]);

  useEffect(() => {
    pageInit();

    return () => resetStore();
  }, []);

  return (
    <Wrapper>
      <Title>App news</Title>
      <When condition={!!isLoaded}>
        <Title>{`Data state is: ${isLoaded}`}</Title>
      </When>
      <ResetButton onClick={resetStore}>Reset store</ResetButton>
      <If condition={!!dataToDisplay.length}>
        <NewsWrapper>
          {dataToDisplay.map(item => (
            <NewsComponent
              key={item.name}
              title={item.name}
              url={item.url}
              urlToImage={item.image.thumbnail.contentUrl}
            />
          ))}
        </NewsWrapper>
      </If>
      <GlobalStyles />
    </Wrapper>
  );
});
