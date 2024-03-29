import { configureStore } from "@reduxjs/toolkit";
import articlesListReducer from "actions/news";
import filtersReducer from "actions/filters";

export const store = configureStore({
  reducer: { articles: articlesListReducer, filters: filtersReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
