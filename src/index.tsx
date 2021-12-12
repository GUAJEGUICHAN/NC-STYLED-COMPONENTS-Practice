import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from './components/App';
import { darkTheme } from './theme';


ReactDOM.render(
  <ThemeProvider theme={darkTheme}>
    <App />
  </ThemeProvider>,

  document.getElementById('app'),
);
