import React, { useState } from 'react';

import styled, { createGlobalStyle } from 'styled-components';
import Router from '../Router';
import Circle from './Circle';

const GlobalStyle = createGlobalStyle`
<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
</style>
  *{
    box-sizing:border-box;
  }
  body{
    font-size:14px;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
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
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>

  );
}
