import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";


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

const CoinsList = styled.ul`
`;

const Coin = styled.li`
    background:white;
    margin-bottom:10px;
    color:${(props) => props.theme.bgColor};
    border-radius:20px;
    a{
      transition: color 0.2s ease-in;
      display:block;
      padding:20px;

    }
    &:hover{
      a{
        color:${props => props.theme.accentColor}
      }
    }

`;

type RouterParams = {
  coinId: string;
}

const coins = [{
  id: "btc-bitcoin",
  name: "Bitcoin",
  symbol: "BTC",
  rank: 1,
  is_new: false,
  is_active: true,
  type: "coin",
},
{
  id: "eth-ethereum",
  name: "Ethereum",
  symbol: "ETH",
  rank: 2,
  is_new: false,
  is_active: true,
  type: "coin",
},
{
  id: "hex-hex",
  name: "HEX",
  symbol: "HEX",
  rank: 3,
  is_new: false,
  is_active: true,
  type: "token",
},]

type CoinInterface = {
  id: string,
  name: string,
  symbol: string,
  rank: number,
  is_new: boolean,
  is_active: boolean,
  type: string
}

export default function Coins() {
  const [coin, setCoin] = useState<CoinInterface>()
  useEffect(() => {
    (async () => {
      const request = await fetch("https://api.coinpaprika.com/v1/coins")
      const json = await request.json();
      console.log(json);
    })();
  }, [])
  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>
      <CoinsList>
        {coins.map(coin =>
          <Coin key={coin.id}>
            <Link to={`/${coin.id}`}>{coin.name} &rarr;
            </Link >
          </Coin>
        )}
      </CoinsList>
    </Container >
  )
}