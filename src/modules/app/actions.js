import { APP_INIT, APP_RESET, APP_GET_DATA, APP_SET_ACTIVE_THEME } from './consts';

export const actionAppPageInit = payload => ({ type: APP_INIT, payload });

export const actionAppPageReset = () => ({ type: APP_RESET });

export const actionAppPageSetData = payload => ({
  type: APP_GET_DATA,
  payload,
});

export const actionAppSetActiveTheme = payload => ({
  type: APP_SET_ACTIVE_THEME,
  payload,
});
