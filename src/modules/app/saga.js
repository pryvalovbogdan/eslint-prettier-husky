import { takeLatest, put, select } from 'redux-saga/effects';
import { APP_INIT } from './consts';

import { selectorGetIsAppInit } from './selectors';
import { actionAppPageSetData, actionAppPageInit } from './actions';
import { httpGet } from '../../http/axiosConfig';

export function* watchExamplePageSaga() {
  yield takeLatest(APP_INIT, handleExamplePageInit);
}

export function* handleExamplePageInit() {
  const isLoaded = yield select(selectorGetIsAppInit);

  if (isLoaded) {
    return;
  }

  try {
    const response = yield httpGet(
      'https://bing-news-search1.p.rapidapi.com/news?textFormat=Raw&safeSearch=Off&category=Sports',
      {
        method: 'GET',
        headers: {
          'x-bingapis-sdk': 'true',
          'x-rapidapi-key': '0f43282f67msh810940b1c85d876p1ae5a0jsnbfb9d6227f6c',
          'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
        },
      },
    ).then(data => data);

    yield put(actionAppPageSetData(response.value || []));
    yield put(actionAppPageInit('Loaded'));
  } catch (error) {
    console.error(error);
    yield put(actionAppPageInit('Failed to load'));
  }
}
