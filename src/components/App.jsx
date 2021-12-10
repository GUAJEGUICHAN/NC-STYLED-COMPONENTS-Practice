import React from 'react';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  display:flex;
`;

const animation = keyframes`
  from{
    transform:rotate(0deg);
    border-radius:0px;
  }to{
    transform:rotate(360deg);
    border-radius:100px
  }
`

const Box = styled.div`
  height:200px;
  width:200px;
  background-color: tomato;
  animation:${animation} 1s linear infinite
`;

export default function App() {
  return (
    <Wrapper>
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <div>왜 안될까?</div>
    </Wrapper>
  );
}
