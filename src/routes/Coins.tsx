import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "./api";
import Helmet from 'react-helmet';

const Title = styled.h1`
  colors:${(props) => props.theme.accentColor}
`;

const Container = styled.div`
  padding : 0 20px;
  max-width: 480px;
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
    // background:blue;
    background:${(props) => props.theme.cardBgColor};
    margin-bottom:10px;
    color:${(props) => props.theme.textColor};
    border-radius:20px;
    a{
      display:flex;
      transition: color 0.2s ease-in;
      padding:20px;
      align-items:center;
    }
    &:hover{
      a{
        color:${props => props.theme.accentColor}
      }
    }

`;

const Loader = styled.span`
  text-align:center;
  display:block;
`;

const CoinImage = styled.img`
  width: 35px;
  height:35px;
  margin-right:10px;
`;

const CoinWrapper = styled.div`
  display:flex;
  align-items:center;
  gap:10px;
`

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
  const { isLoading, data } = useQuery<CoinInterface[]>("allCoins", fetchCoins)
  return (
    <Container>
      <Helmet>
        <title>
          코인
        </title>
      </Helmet>
      <Header>
        <Title>코인</Title>
      </Header>

      {isLoading ?
        <Loader>"Loading..."</Loader> :
        <CoinsList>
          {data?.slice(0, 100).map(coin =>
            <Coin key={coin.id}>
              <Link
                to={`/${coin.id}`}
                state={{
                  name: coin.name,
                  rank: coin.rank
                }}
              >
                <CoinImage src={`https://cryptoicon-api.vercel.app/api/icon/
${coin.symbol.toLowerCase()}`} />
                {coin.name} &rarr;
              </Link >
            </Coin>
          )}
        </CoinsList>}
    </Container >
  )
}
