import React from "react";
import styled from "styled-components";

import { Link, Outlet, useLocation, useParams, useMatch, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchInfoData, fetchPriceData } from "./api";
import { Helmet } from "react-helmet";
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
color:${props => props.theme.textColor};
  justify-content:center;
  align-items:center;
`;

const Loader = styled.span`
  text-align:center;
  display:block;
`;


const Overview = styled.div`
  background: ${props => props.theme.cardBgColor};
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
color:${(props) => props.theme.textColor}
  padding: 10px;
`;

const Tabs = styled.div`
  display:grid;
  grid-template-columns: repeat(2,1fr);
  gap:10px;
`;
const Tab = styled.span<{ isActive: boolean }>`
  font-size:20px;
  height:40px;
  background:${props => props.theme.cardBgColor};
  border-radius:15px;
  color:${props => props.isActive ? props.theme.accentColor : props.theme.textColor};
  a{
    display:block;
    text-align:center;
    box-sizing:border-box;
    height:100%;
    padding:10px;
    transition: color 0.2s ease-in;   
  }

  &:hover{
    a{
      color:${props => props.theme.accentColor}
    }
  }
`;

const GoBack = styled.div`
  cursor:pointer;
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
  const { state } = useLocation() as RouterState;
  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");
  const navigate = useNavigate();

  const { isLoading: infoLoading, data: infoData }
    = useQuery<InfoData>(
      [coinId, "infoData"],
      () => fetchInfoData(coinId));
  const { isLoading: priceLoading, data: priceData }
    = useQuery<PriceData>(
      [coinId, "priceData"],
      () => fetchPriceData(coinId),
      {
        refetchInterval: 1000
      });

  return (
    <Container>
      <Helmet>
        <title>
          {state?.name || (infoData?.name || "Loading...")}
        </title>
      </Helmet>
      <GoBack onClick={() => navigate(-1)}>??????</GoBack>
      <Header>
        <Title>{state?.name || (infoData?.name || "Loading...")} </Title>
      </Header>
      {
        infoLoading ?
          <Loader>"Loading..."</Loader> :
          <>
            <Overview>
              <OverviewItems>
                <span>RANK:</span>
                <span>{infoData?.rank}</span>
              </OverviewItems>
              <OverviewItems>
                <span>SYMBOL:</span>
                <span>{priceData?.symbol}</span>
              </OverviewItems>
              <OverviewItems>
                <span>PRICE</span>
                <span>{`$${priceData?.quotes.USD.price.toFixed(12)}`}</span>
              </OverviewItems>
            </Overview>

            <Describe>
              <span>{infoData?.description}</span>
            </Describe>

            <Overview>
              <OverviewItems>
                <span>TOTAL SUPPlY:</span>
                <span>{priceData?.total_supply}</span>
              </OverviewItems>
              <OverviewItems>
                <span>MAX SUPPLY:</span>
                <span>{priceData?.max_supply}</span>
              </OverviewItems>
            </Overview>
            <Tabs>
              <Tab isActive={chartMatch !== null}>
                <Link to={`/${coinId}/chart`}>Chart</Link>
              </Tab>
              <Tab isActive={priceMatch !== null}>
                <Link to={`/${coinId}/price`}>Price</Link>
              </Tab>
            </Tabs>
          </>
      }
      <Outlet context={{ coinId }} />
    </Container >
  )
}
