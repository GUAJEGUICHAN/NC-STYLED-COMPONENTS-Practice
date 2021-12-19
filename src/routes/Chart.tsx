import React from 'react';
import { useQuery } from 'react-query';
import { useOutletContext } from 'react-router-dom';
import { fetchHistory } from './api';
import ApexChart from 'react-apexcharts'
import { type } from 'os';

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
            fill: {
              type: ['gradient'],
              gradient: {
                gradientToColors: ['blue', 'green'],
                colorStops: [[
                  {
                    offset: 0,
                    color: 'blue',
                    opacity: 50,
                  },
                  {
                    offset: 50,
                    color: 'green',
                    opacity: 50,
                  },
                  {
                    offset: 100,
                    color: 'red',
                    opacity: 50,
                  }
                ]],
                stops: [0, 50, 100]
              }
            },
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
            labels: historyData?.map(datum => datum.time_close.slice(5, 10)),
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
              type: "datetime",
              labels: {
                show: false,

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

                formatter: value => `$${value.toFixed(2)}`
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
            colors: ['red'],
          }}

          series={[{
            name: "Price",
            data: historyData?.map(datum => datum.close
            )
          }]}
        />
      }
    </div>
  )
}

export default Chart;
