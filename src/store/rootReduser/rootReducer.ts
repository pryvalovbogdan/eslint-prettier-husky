import { combineReducers, Reducer, AnyAction } from 'redux';

import { appReducer } from '../../modules/app';

import { IApplicationState } from './types';

const allReducers: Reducer = combineReducers<IApplicationState>({
  app: appReducer,
});

export const rootReducer = (state: IApplicationState, action: AnyAction) => {
  return allReducers(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;
