import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { RootState } from '../../store/rootReduser/rootReducer';

export const selectorGetAppState = (state: RootState): any => state.app || initialState;

export const selectorGetDataToDisplay = createSelector(
  selectorGetAppState,
  state => state.dataToDisplay,
);

export const selectorGetIsAppLoaded = createSelector(selectorGetAppState, state => state.isLoaded);

export const selectorGetActiveTheme = createSelector(
  selectorGetAppState,
  state => state.activeTheme,
);
