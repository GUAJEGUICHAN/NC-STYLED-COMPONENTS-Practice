import React, { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Router from '../Router';
import { lightTheme, darkTheme } from '../theme';

import { isDarkAtom } from '../atom';

const GlobalStyle = createGlobalStyle`
<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
</style>
  *{
    box-sizing:border-box;
  }
  body{
    font-weight: 300;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    background:${(props) => props.theme.bgColor};
    color:${(props) => props.theme.textColor};
    line-height: 1.2
  }
  a{
    text-decoration:none;
    color:inherit;
    cursor: pointer;
  }
  ol, ul, li {
      list-style: none;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
    }
  input, button {
    background-color: transparent;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family:'Maven Pro', sans-serif;
  }
  body{
    font-family: 'Source Sans Pro', sans-serif;
  }
  a{
    text-decoration:none;
  }
.apexcharts-tooltip{
  color:black;
}
`;

export default function App() {
  const isDark = useRecoilValue(isDarkAtom);
  const setterFn = useSetRecoilState(isDarkAtom);
  const toggleDark = () => {
    setterFn((prev) => !prev);
  };
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <button onClick={toggleDark}>Night or Day</button>
      <GlobalStyle />
      <Router />
    </ThemeProvider>

  );
}
