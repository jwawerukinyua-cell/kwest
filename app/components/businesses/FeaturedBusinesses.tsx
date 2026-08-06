import BusinessCard from "./BusinessCard";
import { businesses } from "../../data/businesses";
import { categories } from "../../data/categories";

export default function FeaturedBusinesses() {
  const featuredBusinesses = businesses.filter(
    (business) => business.featured
  );

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-5">

        {/* Section Badge */}

        <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-emerald-700">
          ⭐ Featured Businesses
        </span>

        {/* Section Heading */}

        <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Trusted Businesses Around Kahawa West
        </h2>

        {/* Description */}

        <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600">
          Explore verified local businesses trusted by the community.
          From everyday essentials to professional services, discover
          businesses that make life in Kahawa West easier.
        </p>

        {/* Business Cards */}

        <div className="mt-10 grid gap-8 lg:grid-cols-3">

          {featuredBusinesses.map((business) => {
            const category = categories.find(
              (category) => category.id === business.categoryId
            );
            console.log(
  business.name,
  business.openingHours
);

            return (
              <BusinessCard
                key={business.id}
                name={business.name}
                category={category?.name ?? "Uncategorized"}
                categoryIcon={category?.icon ?? "🏪"}
                landmark={business.landmark}
          
                verified={business.verified}
                phone={business.phone}
                whatsapp={business.whatsapp}
                openingHours={business.openingHours}
              />
            );
          })}

        </div>

      </div>
    </section>
  );
}