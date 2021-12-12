import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from './components/App';
import { lightTheme } from './theme';


ReactDOM.render(
  <ThemeProvider theme={lightTheme}>
    <App />
  </ThemeProvider>,

  document.getElementById('app'),
);
