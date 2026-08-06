import Button from "../../ui/Button";

const updates = [
  {
    type: "🟠 ALERT",
    title: "Scheduled Water Interruption",
    date: "Tomorrow • 9:00 AM - 4:00 PM",
    location: "Kahawa West",
  },
  {
    type: "🔵 EVENT",
    title: "Kahawa West Youth Football Tournament",
    date: "Saturday • 10:00 AM",
    location: "Kahawa West Grounds",
  },
  {
    type: "🟢 BUSINESS",
    title: "New Bakery Opening",
    date: "This Friday",
    location: "Kamiti Road",
  },
  {
    type: "❤️ COMMUNITY",
    title: "Community Blood Donation Drive",
    date: "Sunday • 8:00 AM",
    location: "PCEA Kahawa West",
  },
];

export default function CommunityUpdates() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-5">

        {/* Section Badge */}

        <div className="text-center">

          <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-emerald-700">
            📢 Community Updates
          </span>

          {/* Heading */}

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Stay Connected With what&apos;s Happening
          </h2>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600">
            Important announcements, local events, business openings,
            community initiatives and neighbourhood updates—all in one
            trusted place.
          </p>

        </div>

        {/* Updates */}

        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg">

          {updates.map((update, index) => (
            <article
              key={index}
              className={`p-6 transition-colors duration-300 hover:bg-slate-50 ${
                index !== updates.length - 1
                  ? "border-b border-slate-200"
                  : ""
              }`}
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                <div>

                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                    {update.type}
                  </span>

                  <h3 className="mt-3 text-xl font-semibold text-slate-900">
                    {update.title}
                  </h3>

                  <p className="mt-2 text-base leading-7 text-slate-600">
                    {update.date}
                  </p>

                </div>

                <div className="text-sm font-medium text-slate-500">
                  📍 {update.location}
                </div>

              </div>
            </article>
          ))}

        </div>

        {/* CTA */}

        <div className="mt-12 flex justify-center">

          <Button>
            Explore All Community Updates
          </Button>

        </div>

      </div>
    </section>
  );
}