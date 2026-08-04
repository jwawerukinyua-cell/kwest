"use client";

import { DirectoryProvider } from "../context/DirectoryContext";

import DirectoryHeader from "../components/directory/DirectoryHeader";
import SearchBar from "../components/directory/SearchBar";
import CategoryFilter from "../components/directory/CategoryFilter";
import SortDropdown from "../components/directory/SortDropdown";
import BusinessGrid from "../components/directory/BusinessGrid";

export default function DirectoryPage() {
  return (
    <DirectoryProvider>
      <main className="min-h-screen bg-slate-50">
        <DirectoryHeader />

        <SearchBar />

        <CategoryFilter />

        <section className="mx-auto max-w-7xl px-5 pb-6">
          <div className="flex justify-end">
            <SortDropdown />
          </div>
        </section>

        <BusinessGrid />
      </main>
    </DirectoryProvider>
  );
}