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