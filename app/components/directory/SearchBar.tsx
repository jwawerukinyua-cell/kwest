"use client";

import { useDirectory } from "../../context/DirectoryContext";

export default function SearchBar() {
  const { search, setSearch } = useDirectory();

  return (
    <section className="bg-white border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-5 py-6">

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search businesses, services or landmarks..."
          className="
            w-full
            rounded-2xl
            border
            border-slate-300
            bg-white
            px-5
            py-4
            text-slate-900
            shadow-sm
            transition
            focus:border-emerald-500
            focus:outline-none
            focus:ring-2
            focus:ring-emerald-200
          "
        />

      </div>
    </section>
  );
}