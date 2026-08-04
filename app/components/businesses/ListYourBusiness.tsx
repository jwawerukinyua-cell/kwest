import Button from "../ui/Button";

export default function ListYourBusiness() {
  return (
    <section className="bg-emerald-600 py-20">
      <div className="mx-auto max-w-5xl px-5 text-center">

        {/* Badge */}

        <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white">
          🚀 Join the KWEST Directory
        </span>

        {/* Heading */}

        <h2 className="mt-6 text-3xl font-bold tracking-tight text-white md:text-4xl">
          Grow Your Business. Strengthen Your Community.
        </h2>

        {/* Description */}

        <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-emerald-50">
          Whether you run a grocery shop, salon, hardware, restaurant,
          pharmacy, workshop or professional service, KWEST helps residents
          discover trusted local businesses quickly and confidently.
        </p>

        {/* Benefits */}

        <div className="mt-12 grid gap-5 text-left md:grid-cols-2">

          <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/15">
            ✅ Reach customers actively looking for local services.
          </div>

          <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/15">
            📱 Receive direct phone calls and WhatsApp enquiries.
          </div>

          <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/15">
            📷 Showcase your business with high-quality photos.
          </div>

          <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/15">
            ⭐ Build trust with a verified local business profile.
          </div>

        </div>

        {/* CTA */}

        <div className="mt-12 flex flex-wrap justify-center gap-4">

          <Button variant="light">
            Join the Directory
          </Button>

          <Button variant="secondary">
            Learn More
          </Button>

        </div>

      </div>
    </section>
  );
}