export const logger = store => {
  console.log('store', store);
  return next => {
    return action => {
      console.log('dispatch', action);
      let result = next(action);
      console.log('next state', store.getState());
      return result;
    };
  };
};
