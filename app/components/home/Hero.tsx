import Image from "next/image";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden">

      {/* Background Image */}

<div className="absolute inset-0">

  <Image
  src="/images/kahawa-west/hero.jpg"
  alt="Kahawa West Roundabout"
  fill
  priority
  className="object-cover"
/>

  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/65 to-slate-900/30" />

</div>

      <div className="relative mx-auto max-w-7xl px-5 py-36 md:py-44">

        {/* Badge */}

        <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur">
         📍 Built by Residents. Built for Residents.
        </span>

        {/* Heading */}

        <h1 className="mt-8 max-w-4xl text-5xl font-extrabold leading-tight tracking-tight text-white md:text-7xl">
  Kahawa West,
  <span className="block text-emerald-400">
    Finally Organized.
  </span>
</h1>

        {/* Description */}

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200">
Find trusted businesses, discover hidden local gems, read community updates,
and support businesses around you—all in one trusted place.
</p>

        {/* Search */}

        <div className="mt-10 max-w-3xl">

          <input
  type="text"
  placeholder="Search Quickmart, Kamiti Road, Hardware, Pharmacy..."
  className="w-full rounded-2xl border border-white/20 bg-white/95 px-6 py-5 text-slate-900 shadow-xl outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-300"
/>

        </div>

        {/* CTA */}

        <div className="mt-8 flex flex-wrap gap-4">

          <Button>
            Explore Directory
          </Button>

          <Button variant="secondary">
  What&apos;s Happening Today
</Button>

        </div>

        {/* Stats */}

        <div className="mt-14 grid max-w-3xl grid-cols-3 gap-5">

          <div className="rounded-2xl border border-white/15 bg-white/10 p-5 text-center backdrop-blur">

            <p className="text-3xl font-bold text-white">
              50+
            </p>

            <p className="mt-2 text-sm text-slate-200">
              Businesses
            </p>

          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 p-5 text-center backdrop-blur">

            <p className="text-3xl font-bold text-white">
              12
            </p>

            <p className="mt-2 text-sm text-slate-200">
              Categories
            </p>

          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 p-5 text-center backdrop-blur">

            <p className="text-3xl font-bold text-emerald-400">
              Growing
            </p>

            <p className="mt-2 text-sm text-slate-200">
              Every Week
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}