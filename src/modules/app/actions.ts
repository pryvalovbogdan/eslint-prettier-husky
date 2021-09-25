import { APP_INIT, APP_RESET, APP_GET_DATA, APP_SET_ACTIVE_THEME } from './consts';
import { IAppPageInit, IAppReset, IAppGetData, IAppSetActiveTheme } from './types/actionsTypes';

export const actionAppPageInit = (payload: string): IAppPageInit => ({ type: APP_INIT, payload });

export const actionAppPageReset = (): IAppReset => ({ type: APP_RESET });

export const actionAppPageSetData = (payload: []): IAppGetData => ({
  type: APP_GET_DATA,
  payload,
});

export const actionAppSetActiveTheme = (payload: string): IAppSetActiveTheme => ({
  type: APP_SET_ACTIVE_THEME,
  payload,
});
