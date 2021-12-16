import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { json } from "stream/consumers";
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
  const [coins, setCoins] = useState<CoinInterface[]>([])
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const request = await fetch("https://api.coinpaprika.com/v1/coins")
      const json = await request.json();
      setCoins(json.slice(0, 100))
      setLoading(false)
    })();
  }, [])
  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>
      {loading ?
        <Loader>"Loading..."</Loader> :
        <CoinsList>
          {coins.map(coin =>
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