const BASE_URL: string = 'https://api.coinpaprika.com/v1';

export function fetchCoins() {
	return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}
export function fetchCoinInfo(coinId: string) {
	return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
		response.json()
	);
}
export function fetchCoinTickers(coinId: string) {
	return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
		response.json()
	);
}

// const response = await fetch('https://api.coinpaprika.com/v1/coins');
// return await response.json();  비동기 방식
