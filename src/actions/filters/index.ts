import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { AllFilters, Filters, Query } from "models/filters";

const initialState: AllFilters = {
  query: "",
  from_date: "",
  to_date: "",
};

export const filtersSlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    saveQuery: (state, action: PayloadAction<Query>) => {
      state.query = action.payload.query;
    },
    saveFilter: (state, action: PayloadAction<Filters>) => {
      state.from_date = action.payload.from_date;
      state.to_date = action.payload.to_date;
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveQuery, saveFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
