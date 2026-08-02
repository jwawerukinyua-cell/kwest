const categories = [
  { icon: "🏠", name: "Home & Utilities" },
  { icon: "🛠️", name: "Hardware & Construction" },
  { icon: "🥬", name: "Food & Fresh" },
  { icon: "🚚", name: "Errands & Deliveries" },
  { icon: "💼", name: "Professional Services" },
  { icon: "💇", name: "Beauty & Grooming" },
  { icon: "🏥", name: "Health & Wellness" },
  { icon: "🚗", name: "Transport & Auto" },
  { icon: "🎓", name: "Education" },
  { icon: "☕", name: "Restaurants & Cafés" },
];

export default function CategoryGrid() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-5">

        <h2 className="text-2xl font-bold text-slate-900">
          Browse by Category
        </h2>

        <p className="mt-2 text-slate-600">
          Find trusted businesses and services across Kahawa West.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4">

          {categories.map((category) => (

            <button
              key={category.name}
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-sm
                transition
                hover:border-emerald-500
                hover:shadow-md
              "
            >

              <div className="text-3xl">
                {category.icon}
              </div>

              <p className="mt-3 font-semibold text-slate-800 text-sm">
                {category.name}
              </p>

            </button>

          ))}

        </div>

      </div>
    </section>
  );
}