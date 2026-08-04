type BusinessHeroProps = {
  name: string;
  category: string;
  landmark: string;
  verified: boolean;
  rating: number;
};

export default function BusinessHero({
  name,
  category,
  landmark,
  verified,
  rating,
}: BusinessHeroProps) {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200">

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>

          <div className="flex items-center gap-3">

            <h1 className="text-4xl font-bold text-slate-900">
              {name}
            </h1>

            {verified && (
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
                ✓ Verified
              </span>
            )}

          </div>

          <p className="mt-2 text-lg text-emerald-600 font-medium">
            {category}
          </p>

          <p className="mt-3 text-slate-600">
            📍 {landmark}
          </p>

        </div>

        <div className="rounded-2xl bg-slate-100 px-6 py-5 text-center">

          <p className="text-sm text-slate-500">
            Community Rating
          </p>

          <p className="mt-2 text-3xl font-bold text-slate-900">
            ⭐ {rating}
          </p>

        </div>

      </div>

    </section>
  );
}