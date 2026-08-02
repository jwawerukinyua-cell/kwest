export default function CommunitySpotlight() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-5">
        {/* Section Heading */}

        <div className="mb-10 text-center">
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            📰 Community Spotlight
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            The Stories That Bring Kahawa West Together
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            From inspiring residents and local businesses to schools, sports,
            neighbourhood events and community initiatives, KWEST shines a
            spotlight on the stories that matter most. Every story is reviewed
            before publication to help keep our community informed, inspired and
            connected.
          </p>
        </div>

        {/* Featured Story */}

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          {/* Story Image */}

          <div className="relative flex h-80 items-center justify-center bg-slate-800">
            <div className="absolute inset-0 bg-black/40"></div>

            <span className="relative rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
              📷 Community Photo
            </span>
          </div>

          {/* Story Content */}

          <div className="p-8">
            <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-xs font-bold uppercase tracking-widest text-emerald-700">
              ⭐ Featured This Week
            </span>

            <h3 className="mt-5 text-3xl font-bold text-slate-900">
              This Space Belongs to the Community
            </h3>

            <p className="mt-5 leading-8 text-slate-600">
              Whether it's a neighbourhood clean-up, a student earning a
              scholarship, a family receiving community support, a sports
              victory, a new business opening or an inspiring resident making a
              difference, KWEST is here to document and celebrate the moments
              that shape Kahawa West.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700">
                Read This Week&apos;s Story →
              </button>

              <button className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100">
                Submit a Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}