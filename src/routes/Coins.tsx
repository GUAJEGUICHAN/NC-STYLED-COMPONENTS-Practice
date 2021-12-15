import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";


const Title = styled.h1`
  colors:${(props) => props.theme.accentColor}
`;

const Container = styled.div`
  padding : 0 20px;
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
    padding:20px;
    color:${(props) => props.theme.bgColor};
    border-radius:20px;

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

export default function Coins() {

  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>
      <CoinsList>
        {coins.map(coin =>
          <Coin key={coin.id}>{coin.name} &rarr; </Coin>
        )}
      </CoinsList>
    </Container>
  )
}