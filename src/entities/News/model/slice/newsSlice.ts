import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewsItemType, NewsSchema } from "../types/news";

const initialState: NewsSchema = {
  news: [
    {
      id: 1,
      title: "title",
      text: "text",
    },
  ],
  text: "",
  title: "",
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    addNews: (state, action: PayloadAction<NewsItemType>) => {
      state.news = [...state.news, action.payload];
    },
    removeNews: (state, action: PayloadAction<number>) => {
      state.news = state.news.filter((item) => item.id !== action.payload);
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});
export const { actions: newsActions } = newsSlice;
export const { reducer: newsReducer } = newsSlice;
