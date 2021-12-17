import React from 'react';
import { useQuery } from 'react-query';
import { useOutletContext } from 'react-router-dom';
import { fetchHistory } from './api';

type IHistorical = {
  close: number;
  high: number;
  low: number;
  market_cap: number;
  open: number;
  time_close: string;
  time_open: string;
  volume: number;
}

type ChartProps = {
  coinId: string
}
function Chart() {
  const { coinId } = useOutletContext<ChartProps>();
  const { isLoading: historyLoading, data: historyData } = useQuery<IHistorical[]>([coinId, "History"], () => fetchHistory(coinId));
  console.log(coinId)
  console.log(historyData)
  return (
    historyLoading ?
      <h1>"Loading..."</h1> :
      <h1>Chart</h1>
  )
}

export default Chart;
