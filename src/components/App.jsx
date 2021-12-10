import React from 'react';
import styled from 'styled-components';

const Father = styled.div`
  display: flex;
`;
const Btn = styled.button`
  color:white;
  background-color:tomato;
  border:0;
  border-radius:15px;
`


export default function App() {
  return (
    <Father>
      <Btn>Log in</Btn>
    </Father>
  );
}
