import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types";
import { mockProducts } from "@/data/products";

export type Filters = {
  category: 'phone' | 'laptop' | 'gadget' | 'all';
  priceRange: [number, number];
  brands: string[];
  rating: number;
};

type SortBy = "popularity" | "price" | "rating" | "priceAsc" | "priceDesc";

type CatalogState = {
  products: Product[];
  filters: Filters;
  sortBy: SortBy;
  loading: boolean;
  error: string | null;
};

const initialState: CatalogState = {
  products: [],
  filters: {
    category: 'all',
    priceRange: [0, 1000],
    brands: [],
    rating: 0,
  },
  sortBy: "popularity",
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk<Product[]>(
  "catalog/fetchProducts",
  async () => {
    return new Promise<Product[]>((resolve) => {
      setTimeout(() => {
        resolve(mockProducts);
      }, 1000);
    });
  }
);

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<Partial<Filters>>) => {
      state.filters = {
        ...state.filters,
        ...action.payload,
      };
    },
    setSortBy: (state, action: PayloadAction<SortBy>) => {
      state.sortBy = action.payload;
    },
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Ошибка загрузки";
      });
  },
});

export const { setFilters, setSortBy, setProducts } = catalogSlice.actions;
export default catalogSlice.reducer;
