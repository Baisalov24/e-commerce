import React from "react";
import { useDispatch } from "react-redux";
import { setFilters, setSortBy } from "@/store/catalogSlice";
import { Filters } from "@/types";

const FiltersPanel = () => {
  const dispatch = useDispatch();

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortBy(e.target.value as any));
  };

  const handleReset = () => {
    const defaultFilters: Filters = {
      priceRange: [0, 10000],
      brands: [],
      rating: 0,
      category: "all",
    };
    dispatch(setFilters(defaultFilters));
  };

  return (
    <div style={{ marginBottom: 16 }}>
      <label>
        Сортировка:
        <select onChange={handleSortChange}>
          <option value="popular">By popularity</option>
          <option value="priceAsc">By price ascending</option>
          <option value="priceDesc">By price descending</option>
        </select>
      </label>
      <button onClick={handleReset} style={{ marginLeft: 8 }}>Reset filters</button>
    </div>
  );
};

export default FiltersPanel;
