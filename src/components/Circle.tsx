import React, { useState } from 'react'
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

export default function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  const [counter, setCounter] = useState(1)//초기 값에 따라서 typescript가 자동으로 해당 변수의 타입을 정한다. 여기서는 number로 정해졌다.
  //setCounter("2") //typescript가 자동으로 에러를 감지한다. 왜냐하면 string 타입이 들어갔기 떄문이다.
  return <Container bgColor={bgColor} borderColor={borderColor ?? "red"} >
    {text}
  </Container>;
}