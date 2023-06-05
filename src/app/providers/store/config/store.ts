import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { CryptoTableReducer } from "../../../../features/CryptoTable/model/slice/CryptoTableSlice";
import { newsReducer } from "entities/News";
import { roadmapReducer } from "entities/RoadmapItem";
import { reportReducer } from "entities/StatusReport";
import { podcastReducer } from "entities/Podcast";
import { blogReducer } from "../../../../entities/Blog";

export function createReduxStore() {
  const rootReducer: ReducersMapObject<StateSchema> = {
    cryptoTable: CryptoTableReducer,
    news: newsReducer,
    roadmap: roadmapReducer,
    reports: reportReducer,
    podcasts: podcastReducer,
    blogs: blogReducer,
  };

  const store = configureStore({
    reducer: rootReducer,
  });

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
