"use client";

import { useDirectory } from "../../context/DirectoryContext";

export default function SortDropdown() {
  const { sortBy, setSortBy } = useDirectory();

  return (
    <div className="flex items-center gap-3">

      <label
        htmlFor="sort"
        className="text-sm font-medium text-slate-600"
      >
        Sort
      </label>

      <select
        id="sort"
        value={sortBy}
        onChange={(e) =>
          setSortBy(e.target.value as typeof sortBy)
        }
        className="
          rounded-xl
          border
          border-slate-300
          bg-white
          px-4
          py-2
          text-sm
          font-medium
          text-slate-700
          shadow-sm
          focus:border-emerald-500
          focus:outline-none
          focus:ring-2
          focus:ring-emerald-200
        "
      >
        <option value="featured">⭐ Featured</option>
        <option value="rating">⭐ Highest Rated</option>
        <option value="name-asc">🔤 Name (A–Z)</option>
        <option value="name-desc">🔤 Name (Z–A)</option>
        <option value="newest">🆕 Newest</option>
      </select>

    </div>
  );
}