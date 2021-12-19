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
          options={{
            chart: {
              animations: {
                enabled: false
              },
              background: "transparent",
              id: "test",
              toolbar: {
                show: false
              },
              zoom: {
                enabled: false,
              },
            },
            labels: historyData?.map(datum => datum.time_open.slice(5, 10)),
            stroke: {
              curve: 'smooth',
              width: 4
            },
            yaxis: {
              show: true,
              decimalsInFloat: 0,
              labels: {
                style: {
                  colors: ['#fff']
                }
              }
            },
            xaxis: {
              labels: {
                show: true,
                style: {
                  colors: historyData?.map(datum => '#fff')
                }
              }
            },
            subtitle: {
              text: "Chart"
            },
            tooltip: {
              enabled: true,
              fillSeriesColor: false,
              followCursor: true,
              x: {
                show: false
              },
              y: {
                title: {
                  formatter: () => "Price"
                }
              }
            },
            title: {
              text: "Coin Chart"
            },
            markers: {
              colors: ['#000']
            },
            grid: {
              show: false
            },
            colors: ['#fff'],
          }}

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
