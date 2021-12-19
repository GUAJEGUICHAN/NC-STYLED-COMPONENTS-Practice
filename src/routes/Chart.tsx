import React from 'react';
import { useQuery } from 'react-query';
import { useOutletContext } from 'react-router-dom';
import { fetchHistory } from './api';
import ApexChart from 'react-apexcharts'

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
    <div>
      {historyLoading ?
        "Loading..." :
        <ApexChart
          options={
            {
              chart: {
                id: "test"
              }
            }
          }
          series={[{
            data: historyData?.map(datum => datum.close
            )
          }]}
        />
      }
    </div>
  )
}

export default Chart;
