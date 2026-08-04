import { categories } from "../../data/categories";

export default function CategoryGrid() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-5">

        {/* Section Badge */}

        <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-emerald-700">
          📂 Categories
        </span>

        {/* Section Heading */}

        <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Browse by Category
        </h2>

        {/* Description */}

        <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600">
          Find trusted businesses and everyday services across Kahawa West,
          organised into simple categories to help you find what you need
          faster.
        </p>

        {/* Categories */}

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">

          {categories.map((category) => (

            <button
              key={category.id}
              aria-label={category.name}
              className="
                group
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-emerald-500
                hover:shadow-lg
                focus:outline-none
                focus:ring-4
                focus:ring-emerald-100
              "
            >

              <div className="text-4xl transition-transform duration-300 group-hover:scale-110">
                {category.icon}
              </div>

              <p className="mt-4 text-sm font-semibold leading-6 text-slate-800">
                {category.name}
              </p>

            </button>

          ))}

        </div>

      </div>
    </section>
  );
}