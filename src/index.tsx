import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from './components/App';
import { lightTheme2 } from './theme';

const darkTheme = {
  textColor: 'whitesmoke',
  backgroundColor: '#111',
};

const lightTheme = {
  textColor: '#111',
  backgroundColor: 'whitesmoke',
};

ReactDOM.render(
  <ThemeProvider theme={lightTheme2}>
    <App />
  </ThemeProvider>,

  document.getElementById('app'),
);
