import { takeLatest, put, select } from 'redux-saga/effects';
import { APP_INIT } from './consts';

import { selectorGetIsAppInit } from './selectors';
import { actionAppPageSetData, actionAppPageInit } from './actions';

export function* watchExamplePageSaga() {
  yield takeLatest(APP_INIT, handleExamplePageInit);
}

export function* handleExamplePageInit() {
  const isLoaded = yield select(selectorGetIsAppInit);

  if (isLoaded) {
    return;
  }

  try {
    const response = yield fetch(
      'https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw',
      {
        method: 'GET',
        headers: {
          'x-bingapis-sdk': 'true',
          'x-rapidapi-key': '3700d7e2a0mshf9e9fd678dd034bp109039jsna5b3901c047d',
          'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
        },
      },
    ).then(data => data.json());

    yield put(actionAppPageSetData(response.value || []));
    yield put(actionAppPageInit('Loaded'));
  } catch (error) {
    yield put(actionAppPageInit('Failed to load'));
    console.error(error);
  }
}
