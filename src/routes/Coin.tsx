import React, { useEffect, useState } from "react";
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

type NameState = {
  name: string;
}
type RouterState = {
  state: {
    name: string,
    rank: string
  }
}

export default function Coin() {
  const { coinId } = useParams<RouteParams>();
  const [loading, setLoading] = useState(true);
  const { state } = useLocation() as RouterState;

  const [info, setInfo] = useState({});
  const [priceInfo, setPriceInfo] = useState({});
  useEffect(() => {
    (async () => {
      const infoData = await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json()
      const priceData = await (await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)).json()
      setInfo(infoData);
      setPriceInfo(priceData);
    })();

    return () => {
    }
  }, [])
  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading..."} </Title>
      </Header>
      {loading ?
        <Loader>"Loading..."</Loader> :
        <div > {coinId}</div>
      }
    </Container>
  )
}