export default function ListYourBusiness() {
  return (
    <section className="bg-emerald-600 py-20">
      <div className="mx-auto max-w-5xl px-5 text-center">

        {/* Badge */}

        <span className="inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">
          🚀 Join the KWEST Directory
        </span>

        {/* Heading */}

        <h2 className="mt-6 text-4xl font-bold text-white">
          Grow Your Business. Strengthen Your Community.
        </h2>

        {/* Description */}

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-emerald-50">
          Whether you run a grocery shop, salon, hardware, restaurant,
          pharmacy, workshop or professional service, KWEST helps residents
          find trusted local businesses quickly and confidently.
        </p>

        {/* Benefits */}

        <div className="mt-10 grid gap-5 text-left md:grid-cols-2">

          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
            ✅ Reach customers looking for local services.
          </div>

          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
            📱 Receive direct phone calls and WhatsApp enquiries.
          </div>

          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
            📷 Showcase your business with quality photos.
          </div>

          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
            ⭐ Build trust through a verified local presence.
          </div>

        </div>

        {/* Call to Action */}

        <div className="mt-12 flex flex-wrap justify-center gap-4">

          <button className="rounded-xl bg-white px-8 py-4 font-semibold text-emerald-700 transition hover:bg-slate-100">
            Join the Directory
          </button>

          <button className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-emerald-700">
            Learn More
          </button>

        </div>

      </div>
    </section>
  );
}