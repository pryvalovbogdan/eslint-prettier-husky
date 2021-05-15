import { APP_INIT, APP_GET_DATA, APP_RESET, APP_SET_ACTIVE_THEME } from './consts';

export const initialState = {
  isLoaded: false,
  dataToDisplay: [],
  activeTheme: 'dark',
};

export const appReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case APP_INIT:
      return appInit(state, payload);

    case APP_GET_DATA:
      return appDataToDisplaySet(state, payload);

    case APP_SET_ACTIVE_THEME:
      return appSetActiveTheme(state, payload);

    case APP_RESET:
      return { ...initialState };

    default:
      return state;
  }
};

function appInit(state, payload) {
  return { ...state, isLoaded: payload };
}

function appDataToDisplaySet(state, payload) {
  return { ...state, dataToDisplay: payload };
}

function appSetActiveTheme(state, payload) {
  return { ...state, activeTheme: payload };
}
