"use client";

import { categories } from "../../data/categories";
import { useDirectory } from "../../context/DirectoryContext";

export default function CategoryFilter() {
  const {
    selectedCategory,
    setSelectedCategory,
  } = useDirectory();

  return (
    <section className="bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-5 py-8">

        <h2 className="text-2xl font-bold text-slate-900">
          Browse Categories
        </h2>

        <p className="mt-2 text-slate-600">
          Choose a category to quickly discover businesses.
        </p>

        <div className="mt-6 flex gap-3 overflow-x-auto pb-2">

          {/* All */}

          <button
            onClick={() => setSelectedCategory("all")}
            className={`whitespace-nowrap rounded-full border px-5 py-3 text-sm font-semibold transition-all ${
              selectedCategory === "all"
                ? "border-emerald-600 bg-emerald-600 text-white"
                : "border-slate-300 bg-white text-slate-700 hover:border-emerald-500"
            }`}
          >
            🌍 All
          </button>

          {categories.map((category) => (

            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`whitespace-nowrap rounded-full border px-5 py-3 text-sm font-semibold transition-all ${
                selectedCategory === category.id
                  ? "border-emerald-600 bg-emerald-600 text-white"
                  : "border-slate-300 bg-white text-slate-700 hover:border-emerald-500"
              }`}
            >
              {category.icon} {category.name}
            </button>

          ))}

        </div>

      </div>
    </section>
  );
}