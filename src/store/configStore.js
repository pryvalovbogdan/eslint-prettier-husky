import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './rootReduser/rootReducer';
import { logger } from './utils/logger';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '../controller/sagas';

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(rootReducer, compose(applyMiddleware(logger, sagaMiddleware)));

  sagaMiddleware.run(rootSaga);

  return store;
};
