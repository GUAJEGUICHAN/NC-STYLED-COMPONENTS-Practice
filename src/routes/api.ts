const BASE_URL = `https://api.coinpaprika.com/v1`


export async function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then(data => data.json())
}

export async function fetchInfoData(coinId?: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then(data => data.json())
}

export async function fetchPriceData(coinId?: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then(data => data.json())
}

export async function fetchHistory(coinId?: string) {
  const start = Math.ceil(Date.now() / 1000) - 60 * 60 * 24 * 6;
  const end = Math.floor(Date.now() / 1000);

  return fetch(`${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${start}&end=${end}`).then(data => data.json());
}