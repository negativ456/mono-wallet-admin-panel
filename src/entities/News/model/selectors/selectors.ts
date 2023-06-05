import { StateSchema } from "../../../../app/providers/store";
import { createSelector } from "@reduxjs/toolkit";

export const getNews = (state: StateSchema) => state.news.news;
export const getNewsById = (id?: number) =>
  createSelector(getNews, (news) => news.find((item) => item.id === id));
export const getNewsTitle = (state: StateSchema) => state.news.title;
export const getNewsText = (state: StateSchema) => state.news.text;
