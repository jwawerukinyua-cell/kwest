import Button from "../../ui/Button";

export default function CommunitySpotlight() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-5">

        {/* Section Badge */}

        <div className="text-center">

          <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-emerald-700">
            📰 Community Spotlight
          </span>

          {/* Heading */}

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            The Stories That Bring Kahawa West Together
          </h2>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600">
            From inspiring residents and local businesses to schools,
            sports, neighbourhood events and community initiatives,
            KWEST shines a spotlight on the stories that matter most.
            Every story is reviewed before publication to help keep our
            community informed, inspired and connected.
          </p>

        </div>

        {/* Featured Story */}

        <article className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

          {/* Story Image */}

          <div className="relative flex h-80 items-center justify-center bg-slate-800">

            <div className="absolute inset-0 bg-black/40" />

            <span className="relative rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
              📷 Community Photo
              <br />
              Coming Soon
            </span>

          </div>

          {/* Story Content */}

          <div className="p-8 md:p-10">

            <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-emerald-700">
              ⭐ Featured This Week
            </span>

            <h3 className="mt-6 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              This Space Belongs to the Community
            </h3>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">
              Whether it's a neighbourhood clean-up, a student earning
              a scholarship, a family receiving community support, a
              sports victory, a new business opening or an inspiring
              resident making a difference, KWEST exists to document
              and celebrate the moments that shape Kahawa West.
            </p>

            {/* CTA */}

            <div className="mt-10 flex flex-wrap gap-4">

              <Button>
                Read This Week&apos;s Story
              </Button>

              <Button variant="secondary">
                Submit a Story
              </Button>

            </div>

          </div>

        </article>

      </div>
    </section>
  );
}