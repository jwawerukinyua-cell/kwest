import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 py-20 md:py-24">

        {/* Badge */}

        <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
          📍 Serving Kahawa West Residents
        </span>

        {/* Hero Heading */}

        <h1 className="mt-6 text-5xl font-extrabold tracking-tight leading-tight text-slate-900 md:text-6xl">
          Everything Kahawa West.
          <br />
          One Trusted Place.
        </h1>

        {/* Description */}

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Discover trusted businesses, local services and community updates
          around Kahawa West, all in one place.
        </p>

        {/* Search */}

        <div className="mt-10 max-w-3xl">

          <label htmlFor="search" className="sr-only">
            Search the KWEST directory
          </label>

          <input
            id="search"
            type="text"
            placeholder="Search businesses, services, landmarks..."
            className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-100"
          />

        </div>

        {/* Call to Action */}

        <div className="mt-8 flex flex-wrap gap-4">

          <Button>
            Browse Directory
          </Button>

          <Button variant="secondary">
            Latest Community Updates
          </Button>

        </div>

        {/* Trust Indicators */}

        <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-500">

          <span>✅ Trusted Local Businesses</span>

          <span>📰 Verified Community Updates</span>

          <span>❤️ Built for Kahawa West</span>

        </div>

      </div>
    </section>
  );
}