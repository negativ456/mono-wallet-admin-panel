import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RoadmapItem, RoadmapSchema, RoadmapTask } from "../types/roadmap";

const initialState: RoadmapSchema = {
  items: [
    {
      id: 1,
      name: "roadmap1",
      date: "2018",
      tasks: [
        {
          id: 1,
          name: "task 1",
          isReady: false,
        },
      ],
    },
  ],
  newRoadmapItem: {
    name: "",
    date: "",
    tasks: [],
  },
};

export const roadmapSlice = createSlice({
  name: "roadmapSlice",
  initialState,
  reducers: {
    setNewItem: (state, action: PayloadAction<Partial<RoadmapItem>>) => {
      state.newRoadmapItem = { ...state.newRoadmapItem, ...action.payload };
    },
    updateItem: (state, action: PayloadAction<Partial<RoadmapItem>>) => {
      state.items = state.items.map((item) =>
        item.id === action.payload.id ? { ...item, ...action.payload } : item
      );
    },
    addItem: (state, action: PayloadAction<RoadmapItem>) => {
      state.items = [
        ...state.items,
        { id: state.items.length + 1, ...action.payload },
      ];
    },
    addEmptyTask: (state) => {
      state.newRoadmapItem.tasks.push({
        id: state.newRoadmapItem.tasks.length + 1,
        name: "",
        isReady: false,
      });
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    setNewItemTask: (state, action: PayloadAction<Partial<RoadmapTask>>) => {
      state.newRoadmapItem.tasks = state.newRoadmapItem.tasks.map((task) =>
        task.id === action.payload.id ? { ...task, ...action.payload } : task
      );
    },
  },
});

export const { actions: roadmapActions } = roadmapSlice;
export const { reducer: roadmapReducer } = roadmapSlice;
