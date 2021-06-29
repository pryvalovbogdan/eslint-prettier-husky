import React, { memo, useCallback, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { When, If } from 'react-if';

import { Flex } from '@modules';
import img from '@assets/mr_robot.0.jpg';

import { GlobalStyles, Title, NewsWrapper } from './components/styled/styledComponents';
import { selectorGetIsAppInit, selectorGetDataToDisplay } from './selectors';
import { actionAppPageInit, actionAppPageReset, actionAppSetActiveTheme } from './actions';
import { NewsComponent } from './components/NewsComponent';
import { Box, Text, Button } from '../../components';

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

  const setActiveTheme = useCallback(
    theme => {
      dispatch(actionAppSetActiveTheme(theme));
    },
    [dispatch],
  );

  const pageInit = useCallback(() => {
    dispatch(actionAppPageInit());
  }, [dispatch]);

  const gaEventHandle = useCallback(() => {
    window.gtag('event', 'hey', {
      event_category: 'access',
      event_label: 'userName',
    });
  }, []);

  useEffect(() => {
    pageInit();

    return () => resetStore();
  }, []);

  return (
    <Flex bg={['backgroundThird']} flexDirection="column" alignItems="center">
      <Title>App news</Title>
      <When condition={!!isLoaded}>
        <Title>{`Data state is: ${isLoaded}`}</Title>
      </When>
      <select onChange={value => setActiveTheme(value.target.value)}>
        <option value={'dark'}>dark</option>
        <option value={'light'}>light</option>
      </select>
      <Flex
        flexDirection="column"
        p={[0, 32]}
        backgroundColor={'backgroundPrimary'}
        alignItems="center"
        justifyContent="center"
      >
        <Box onClick={gaEventHandle}>Hey</Box>
      </Flex>
      <Text bold>Serega</Text>
      <Button onClick={resetStore} bg={'accentSecondary'} borderRadius={2} p={10}>
        Reset store
      </Button>
      <img src={img} alt="mr robot" width={100} />
      <If condition={!!dataToDisplay.length}>
        <NewsWrapper>
          {dataToDisplay.map(item => (
            <NewsComponent
              key={item.name}
              title={item.name}
              url={item.url}
              urlToImage={item.image?.thumbnail?.contentUrl}
            />
          ))}
        </NewsWrapper>
      </If>
      <GlobalStyles />
    </Flex>
  );
});
