import { createAsyncThunk } from '@reduxjs/toolkit';

const API_LINK = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
const GET_COINS = 'redux/coinAction/curencies';

const fetchCurrency = createAsyncThunk(GET_COINS, async () => {
  const response = await fetch(API_LINK);
  const result = response.json();
  return result;
});

export default fetchCurrency;
