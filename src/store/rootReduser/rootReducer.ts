import { combineReducers } from 'redux';
import { appReducer } from '../../modules/app';

const allReducers = combineReducers({
  app: appReducer,
});

export const rootReducer = (state, action) => {
  return allReducers(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;
