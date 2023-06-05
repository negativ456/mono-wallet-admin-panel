import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Blog, BlogSchema } from "../types/blog";

const initialState: BlogSchema = {
  blogs: [
    {
      id: 1,
      title: "ttite",
      text: "text",
      link: "link",
    },
  ],
  newBlog: {
    title: "",
    text: "",
    link: "",
  },
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setNewBlog: (state, action: PayloadAction<Partial<Blog>>) => {
      state.newBlog = { ...state.newBlog, ...action.payload };
    },
    updateItem: (state, action: PayloadAction<Partial<Blog>>) => {
      state.blogs = state.blogs.map((report) =>
        report.id === action.payload.id
          ? { ...report, ...action.payload }
          : report
      );
    },
    addItem: (state, action: PayloadAction<Blog>) => {
      state.blogs = [
        ...state.blogs,
        { id: state.blogs.length + 1, ...action.payload },
      ];
    },
  },
});

export const { actions: blogActions } = blogSlice;
export const { reducer: blogReducer } = blogSlice;
