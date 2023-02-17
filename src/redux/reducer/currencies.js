import { createSlice } from '@reduxjs/toolKit';
import fetchCurrency from '../action/coinAction';

const initialState = {
  currencies: [],
  status: null,
};

const currencyReducer = createSlice({
  name: 'currency',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCurrency.fulfilled, (state, action) => {
      const items = state;
      items.status = 'success';
      items.currencies = action.payload;
    });
  },
});

export default currencyReducer.reducer;
