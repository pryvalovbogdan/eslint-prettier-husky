import { createSelector } from 'reselect';
import { initialState } from './reducer';

export const selectorGetAppState = state => state.app || initialState;

export const selectorGetDataToDisplay = createSelector(
  selectorGetAppState,
  state => state.dataToDisplay,
);

export const selectorGetIsAppInit = createSelector(selectorGetAppState, state => state.isLoaded);
