import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const APILINK = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false';
const initialState = {
  coins: [],
  status: null,
};

export const fetchCoins = createAsyncThunk('coins', async () => {
  const response = await fetch(APILINK);
  const data = await response.json();
  return data;
});

const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {},
  extraReducers(reduce) {
    reduce.addCase(fetchCoins.fulfilled, (state, action) => {
      const isFulfilled = state;
      isFulfilled.status = 'fulfilled';
      isFulfilled.coins = action.payload;
    });
  },
});

export default coinsSlice.reducer;
