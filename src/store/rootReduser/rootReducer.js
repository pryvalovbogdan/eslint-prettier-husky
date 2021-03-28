import { combineReducers } from 'redux';
import { appReducer } from '../../modules/app';

const allReducers = combineReducers({
  app: appReducer,
});

const rootReducer = (state, action) => {
  return allReducers(state, action);
};

export default rootReducer;
