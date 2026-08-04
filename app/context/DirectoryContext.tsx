"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from "react";

type SortOption =
  | "featured"
  | "rating"
  | "name-asc"
  | "name-desc"
  | "newest";

type DirectoryContextType = {
  search: string;
  setSearch: (value: string) => void;

  selectedCategory: string;
  setSelectedCategory: (value: string) => void;

  sortBy: SortOption;
  setSortBy: (value: SortOption) => void;
};

const DirectoryContext = createContext<
  DirectoryContextType | undefined
>(undefined);

export function DirectoryProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] =
    useState<SortOption>("featured");

  const value = useMemo(
    () => ({
      search,
      setSearch,

      selectedCategory,
      setSelectedCategory,

      sortBy,
      setSortBy,
    }),
    [search, selectedCategory, sortBy]
  );

  return (
    <DirectoryContext.Provider value={value}>
      {children}
    </DirectoryContext.Provider>
  );
}

export function useDirectory() {
  const context = useContext(DirectoryContext);

  if (!context) {
    throw new Error(
      "useDirectory must be used inside DirectoryProvider."
    );
  }

  return context;
}