import React from 'react';
import { useQuery } from 'react-query';
import { useOutletContext } from 'react-router-dom';
import { fetchHistory } from './api';

type ChartProps = {
  coinId: string
}
function Chart() {
  const { coinId } = useOutletContext<ChartProps>();
  const { isLoading: historyLoading, data: historyData } = useQuery([coinId, "History"], () => fetchHistory(coinId));
  console.log(coinId)
  console.log(historyData)
  return (
    historyLoading ?
      <h1>"Loading..."</h1> :
      <h1>Chart</h1>
  )
}

export default Chart;
