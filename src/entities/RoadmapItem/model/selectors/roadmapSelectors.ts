import { StateSchema } from "../../../../app/providers/store";
import { createSelector } from "@reduxjs/toolkit";

export const getRoadmapItems = (state: StateSchema) => state.roadmap.items;

export const getRoadmapItemById = (id?: number) =>
  createSelector(getRoadmapItems, (items) =>
    items.find((item) => item.id === id)
  );
export const getRoadmapNewItem = (state: StateSchema) =>
  state.roadmap.newRoadmapItem;
