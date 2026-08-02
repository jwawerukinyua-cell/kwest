export default function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16">

        <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
          📍 Serving Kahawa West Residents
        </span>

        <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900">
          Everything Kahawa West.
          <br />
          One Trusted Place.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Discover trusted businesses, local services and community updates
          around Kahawa West, all in one place.
        </p>

        <div className="mt-8">
          <input
            type="text"
            placeholder="Search businesses, services or landmarks..."
            className="w-full rounded-xl border border-slate-300 px-4 py-4 shadow-sm focus:border-emerald-500 focus:outline-none"
          />
        </div>

        <div className="mt-6 flex gap-4">

          <button className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700">
            Browse Directory
          </button>

          <button className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-100">
            Latest Community Updates
          </button>

        </div>

      </div>
    </section>
  );
}