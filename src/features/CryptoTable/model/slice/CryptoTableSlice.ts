import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CryptoTableSchema } from '../types/crytoTableTypes';
import { CryptoTableCategory } from '../const/coinCategories';

const initialState: CryptoTableSchema = {
  search: '',
  category: CryptoTableCategory.ALL,
};

export const CryptoTableSlice = createSlice({
  name: 'CryptoTable',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setCategory: (state, action: PayloadAction<CryptoTableCategory>) => {
      state.category = action.payload;
    },
  },
});

export const { actions: CryptoTableActions } = CryptoTableSlice;
export const { reducer: CryptoTableReducer } = CryptoTableSlice;
