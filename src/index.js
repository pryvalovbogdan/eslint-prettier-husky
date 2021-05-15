import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { configureStore } from './store/configStore';

import { App } from './modules';
import { theme } from './theme/mergeTheme';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
