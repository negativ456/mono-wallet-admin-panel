import { StateSchema } from "app/providers/store";
import { createSelector } from "@reduxjs/toolkit";

export const getBlogs = (state: StateSchema) => state.blogs.blogs;

export const getBlogById = (id?: number) =>
  createSelector(getBlogs, (items) => items.find((item) => item.id === id));
export const getNewBlog = (state: StateSchema) => state.blogs.newBlog;
