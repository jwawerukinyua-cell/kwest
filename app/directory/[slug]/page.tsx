import { notFound } from "next/navigation";

import { businesses } from "../../data/businesses";
import { categories } from "../../data/categories";

import BusinessHero from "../../components/businesses/BusinessHero";

type BusinessPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BusinessPage({
  params,
}: BusinessPageProps) {
  const { slug } = await params;

  const business = businesses.find(
    (business) => business.slug === slug
  );

  if (!business) {
    notFound();
  }

  const category = categories.find(
    (category) => category.id === business.categoryId
  );

  return (
    <main className="mx-auto max-w-6xl px-5 py-10">

      <BusinessHero
        name={business.name}
        category={category?.name ?? "Uncategorized"}
        landmark={business.landmark}
        verified={business.verified}
        rating={business.rating}
      />

      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

        <h2 className="text-2xl font-bold text-slate-900">
          About
        </h2>

        <p className="mt-4 leading-8 text-slate-600">
          {business.description}
        </p>

      </section>

    </main>
  );
}