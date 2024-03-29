import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { AllArticles } from "models/news";

export interface Articlestate {
  articles: AllArticles[];
}

const initialState: Articlestate = {
  articles: [],
};

export const articlesListSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    updateArticles: (state, action: PayloadAction<AllArticles[]>) => {
      state.articles = [...state.articles, ...action.payload];
    },
    clearArticles: (state) => {
      state.articles = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { clearArticles, updateArticles } = articlesListSlice.actions;

export default articlesListSlice.reducer;
