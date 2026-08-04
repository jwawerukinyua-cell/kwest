"use client";

import { businesses } from "../../data/businesses";
import { categories } from "../../data/categories";

import { useDirectory } from "../../context/DirectoryContext";

import BusinessCard from "../businesses/BusinessCard";
import EmptyState from "./EmptyState";

export default function BusinessGrid() {
  const {
    search,
    selectedCategory,
    sortBy,
  } = useDirectory();

  const filteredBusinesses = businesses.filter((business) => {
    const category = categories.find(
      (category) => category.id === business.categoryId
    );

    const query = search.toLowerCase();

    const matchesSearch =
      business.name.toLowerCase().includes(query) ||
      business.landmark.toLowerCase().includes(query) ||
      business.description.toLowerCase().includes(query) ||
      category?.name.toLowerCase().includes(query);

    const matchesCategory =
      selectedCategory === "all" ||
      business.categoryId === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const sortedBusinesses = [...filteredBusinesses].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating;

      case "name-asc":
        return a.name.localeCompare(b.name);

      case "name-desc":
        return b.name.localeCompare(a.name);

      case "newest":
        return (
          new Date(b.createdAt).getTime() -
          new Date(a.createdAt).getTime()
        );

      case "featured":
      default:
        if (a.featured === b.featured) return 0;
        return a.featured ? -1 : 1;
    }
  });

  if (sortedBusinesses.length === 0) {
    return <EmptyState />;
  }

  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 py-10">

        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-2xl font-bold text-slate-900">
            Businesses
          </h2>

          <p className="text-sm text-slate-500">
            {sortedBusinesses.length} businesses found
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {sortedBusinesses.map((business) => {
            const category = categories.find(
              (category) => category.id === business.categoryId
            );

            return (
              <BusinessCard
                key={business.id}
                name={business.name}
                category={category?.name ?? "Uncategorized"}
                landmark={business.landmark}
                rating={business.rating}
                verified={business.verified}
                phone={business.phone}
                whatsapp={business.whatsapp}
              />
            );
          })}

        </div>

      </div>
    </section>
  );
}