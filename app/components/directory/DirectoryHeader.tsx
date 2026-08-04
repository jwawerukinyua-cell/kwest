export default function DirectoryHeader() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14">

        {/* Badge */}

        <span className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-emerald-700">
          📍 KWEST Directory
        </span>

        {/* Heading */}

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Discover Trusted Businesses
        </h1>

        {/* Description */}

        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          Browse verified businesses, compare services, explore categories,
          and connect with trusted local entrepreneurs across Kahawa West.
        </p>

      </div>
    </section>
  );
}