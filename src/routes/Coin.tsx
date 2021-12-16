import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Outlet, useLocation, useParams } from "react-router-dom";
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

const Overview = styled.div`
  background: #252732;
  display:flex;
  height:40px;
  padding:20px;
  justify-content:space-between;
  margin-bottom:10px;
  border-radius:20px;
`;

const OverviewItems = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-around;
  span:first-child {
    font-size:12px;
    font-weight:400;

  }
`;
const Describe = styled.div`
  background:"";
  padding: 10px;
  `

type RouteParams = {
  coinId: string;
}
type RouterState = {
  state: {
    name: string,
    rank: string
  }
}

type InfoData = {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  whitepaper: object;
  first_data_at: string;
  last_data_at: string;

}



type PriceData = {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    }
  };
}

export default function Coin() {
  const { coinId } = useParams<RouteParams>();
  const [loading, setLoading] = useState(true);
  const { state } = useLocation() as RouterState;

  const [info, setInfo] = useState<InfoData>();
  const [priceInfo, setPriceInfo] = useState<PriceData>();

  useEffect(() => {
    (async () => {
      const infoData = await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json()
      console.log(infoData)
      const priceData = await (await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)).json()
      console.log(priceData)
      setInfo(infoData);
      setPriceInfo(priceData);
      setLoading(false);
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
        <>
          <Overview>
            <OverviewItems>
              <span>RANK:</span>
              <span>{info?.rank}</span>
            </OverviewItems>
            <OverviewItems>
              <span>SYMBOL:</span>
              <span>{priceInfo?.symbol}</span>
            </OverviewItems>
            <OverviewItems>
              <span>OPEN SOURCE</span>
              <span>{info?.open_source ? "YES" : "NO"}</span>
            </OverviewItems>
          </Overview>

          <Describe>
            <span>{info?.description}</span>
          </Describe>

          <Overview>
            <OverviewItems>
              <span>TOTAL SUPPlY:</span>
              <span>{priceInfo?.total_supply}</span>
            </OverviewItems>
            <OverviewItems>
              <span>MAX SUPPLY:</span>
              <span>{priceInfo?.max_supply}</span>
            </OverviewItems>
          </Overview>
          <Outlet />

        </>
      }
      <Outlet />
    </Container>
  )
}