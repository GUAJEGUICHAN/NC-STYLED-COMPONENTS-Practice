import React, { useState } from "react";
import styled from "styled-components";

import { useLocation, useParams } from "react-router-dom";
const Title = styled.h1`
  colors:${(props) => props.theme.accentColor}
`;

const Container = styled.div`
  padding : 0 20px;
  max-width: 480;
  margin:0 auto;
`;

const Header = styled.header`
    height:10vh;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const Loader = styled.span`
  text-align:center;
  display:block;
`;

type RouteParams = {
  coinId: string;
}

export default function Coin() {
  const { coinId } = useParams<RouteParams>();
  const [loading, setLoading] = useState(true);
  const location = useLocation()
  console.log(location);
  return (
    <Container>
      <Header>
        <Title>코인 : {coinId} </Title>
      </Header>
      {loading ?
        <Loader>"Loading..."</Loader> :
        <div > {coinId}</div>
      }
    </Container>

  )
}