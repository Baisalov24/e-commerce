import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, Filters } from '@/types';

interface CatalogState {
  products: Product[];
  filters: Filters;
  sortBy: 'popular' | 'priceAsc' | 'priceDesc';
}

const initialState: CatalogState = {
  products: [], 
  filters: {
    priceRange: [0, 10000],
    brands: [],
    rating: 0,
    category: 'all',
  },
  sortBy: 'popular',
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
    setFilters(state, action: PayloadAction<Filters>) {
      state.filters = action.payload;
    },
    setSortBy(state, action: PayloadAction<CatalogState['sortBy']>) {
      state.sortBy = action.payload;
    },
  },
});

export const { setProducts, setFilters, setSortBy } = catalogSlice.actions;
export default catalogSlice.reducer;
