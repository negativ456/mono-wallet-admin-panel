import { StateSchema } from "app/providers/store";
import { createSelector } from "@reduxjs/toolkit";

export const getPodcasts = (state: StateSchema) => state.podcasts.podcasts;

export const getPodcastById = (id?: number) =>
  createSelector(getPodcasts, (items) => items.find((item) => item.id === id));
export const getNewPodcast = (state: StateSchema) => state.podcasts.newPodcast;
