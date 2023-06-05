import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Podcast, PodcastSchema } from "../types/podcast";

const initialState: PodcastSchema = {
  podcasts: [
    {
      id: 1,
      title: "title",
      text: "text",
      date: "27 may",
      link: "link",
    },
  ],
  newPodcast: {
    title: "",
    text: "",
    link: "",
  },
};

export const podcastSlice = createSlice({
  name: "podcast",
  initialState,
  reducers: {
    setNewPodcast: (state, action: PayloadAction<Partial<Podcast>>) => {
      state.newPodcast = { ...state.newPodcast, ...action.payload };
    },
    updateItem: (state, action: PayloadAction<Partial<Podcast>>) => {
      state.podcasts = state.podcasts.map((report) =>
        report.id === action.payload.id
          ? { ...report, ...action.payload }
          : report
      );
    },
    addItem: (state, action: PayloadAction<Podcast>) => {
      state.podcasts = [
        ...state.podcasts,
        { id: state.podcasts.length + 1, ...action.payload },
      ];
    },
  },
});

export const { actions: podcastActions } = podcastSlice;
export const { reducer: podcastReducer } = podcastSlice;
