import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';

import App from './components/App';
import { lightTheme } from './theme';

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </QueryClientProvider>,
  document.getElementById('app'),
);
