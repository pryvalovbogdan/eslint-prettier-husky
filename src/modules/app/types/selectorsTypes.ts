import { selectorGetDataToDisplay, selectorGetIsAppLoaded } from '../selectors';

export type IAppIsLoaded = ReturnType<typeof selectorGetIsAppLoaded>;

export type IAppDataToDisplay = ReturnType<typeof selectorGetDataToDisplay>;
