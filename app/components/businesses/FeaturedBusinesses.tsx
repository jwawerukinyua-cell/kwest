import BusinessCard from "./BusinessCard";

const featuredBusinesses = [
  {
    name: "Kamiti Quick Gas",
    category: "Home & Utilities",
    landmark: "Kamiti Road",
    rating: 4.9,
    verified: true,
    phone: "254722111111",
    whatsapp: "254722111111",
  },
  {
    name: "Soweto Hardware",
    category: "Hardware & Construction",
    landmark: "Soweto Stage",
    rating: 4.8,
    verified: true,
    phone: "254733222222",
    whatsapp: "254733222222",
  },
  {
    name: "Mama Lucy Groceries",
    category: "Food & Fresh",
    landmark: "Near Quickmart",
    rating: 4.7,
    verified: false,
    phone: "254711333333",
    whatsapp: "254711333333",
  },
];

export default function FeaturedBusinesses() {
  return (
    <section className="bg-slate-50 py-14">
      <div className="mx-auto max-w-6xl px-5">

        <div className="mb-8">

          <h2 className="text-3xl font-bold text-slate-900">
            ⭐ Featured Businesses
          </h2>

          <p className="mt-2 text-slate-600">
            Discover trusted local businesses serving the Kahawa West community.
          </p>

        </div>

        <div className="grid gap-6">

          {featuredBusinesses.map((business) => (
            <BusinessCard
              key={business.name}
              name={business.name}
              category={business.category}
              landmark={business.landmark}
              rating={business.rating}
              verified={business.verified}
              phone={business.phone}
              whatsapp={business.whatsapp}
            />
          ))}

        </div>

      </div>
    </section>
  );
}