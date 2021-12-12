import React from 'react'
import styled from 'styled-components'

interface ContainerProps {
  bgColor: string;
  borderColor: string;//여기에는 required로 되어있다.
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
  borderColor?: string;//optional로 설정!
}

export default function Circle({ bgColor, borderColor }: CircleProps) {
  return <Container bgColor={bgColor} borderColor={borderColor ?? "red"} />;//Container입장에서는 borderColor가 required라서 값이 반드시 필요하다 ??로 undefined 값일 때 대체할 수 있는 값을 입력한다.
}