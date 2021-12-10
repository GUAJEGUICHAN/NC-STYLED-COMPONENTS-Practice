import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display:flex;
`;
const Box = styled.div`
  height:200px;
  width:200px;
  background-color: tomato;
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
