import { APP_INIT, APP_RESET, APP_GET_DATA, APP_SET_ACTIVE_THEME } from '../consts';

export interface IAppPageInit {
  type: typeof APP_INIT;
  payload: string;
}

export interface IAppReset {
  type: typeof APP_RESET;
}

export interface IAppGetData {
  type: typeof APP_GET_DATA;
  payload: [];
}

export interface IAppSetActiveTheme {
  type: typeof APP_SET_ACTIVE_THEME;
  payload: string;
}
