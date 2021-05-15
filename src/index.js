import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { configureStore } from './store/configStore';

import { App } from './modules';
import { StyledTheme } from './theme/mergeTheme';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <StyledTheme>
      <App />
    </StyledTheme>
  </Provider>,
  document.getElementById('root'),
);
