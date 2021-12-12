import React from 'react'
import styled from 'styled-components'

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
  border-radius:50px;
  border: 4px solid ${props => props.borderColor}
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string
}

export default function Circle({ bgColor, borderColor, text }: CircleProps) {
  return <Container bgColor={bgColor} borderColor={borderColor ?? "red"} >
    {text}
  </Container>;
}