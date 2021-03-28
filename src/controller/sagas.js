import { all, fork } from 'redux-saga/effects';

import { watchExamplePageSaga } from '../modules/app/saga';

const sagas = [watchExamplePageSaga];

export function* rootSaga() {
  yield all(sagas.map(fork));
}
