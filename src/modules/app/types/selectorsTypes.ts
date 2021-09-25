import { selectorGetDataToDisplay, selectorGetIsAppLoaded } from '../selectors';

export type TypeAppIsLoaded = ReturnType<typeof selectorGetIsAppLoaded>;

export type TypeAppDataToDisplay = ReturnType<typeof selectorGetDataToDisplay>;
