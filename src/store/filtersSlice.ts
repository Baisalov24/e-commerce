import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FiltersState = {
  priceRange: [number, number];
  brand: string;
  rating: number;
};

const initialState: FiltersState = {
  priceRange: [0, 100000],
  brand: "",
  rating: 0,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setPriceRange(state, action: PayloadAction<[number, number]>) {
      state.priceRange = action.payload;
    },
    setBrand(state, action: PayloadAction<string>) {
      state.brand = action.payload;
    },
    setRating(state, action: PayloadAction<number>) {
      state.rating = action.payload;
    },
  },
});

export const { setPriceRange, setBrand, setRating } = filtersSlice.actions;
export default filtersSlice.reducer;
export type { FiltersState };
