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
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-5">

        {/* Section Heading */}

        <div className="mb-10 text-center">

          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            📢 Community Updates
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Stay Connected With What's Happening
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Important announcements, local events, business openings,
            community initiatives and neighbourhood updates—all in one place.
          </p>

        </div>

        {/* Updates */}

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

          {updates.map((update, index) => (
            <div
              key={index}
              className={`p-6 ${
                index !== updates.length - 1
                  ? "border-b border-slate-200"
                  : ""
              }`}
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">

                <div>

                  <span className="text-sm font-semibold text-emerald-700">
                    {update.type}
                  </span>

                  <h3 className="mt-2 text-xl font-bold text-slate-900">
                    {update.title}
                  </h3>

                  <p className="mt-2 text-slate-600">
                    {update.date}
                  </p>

                </div>

                <div className="text-sm font-medium text-slate-500">
                  📍 {update.location}
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* Button */}

        <div className="mt-10 text-center">

          <button className="rounded-xl bg-emerald-600 px-8 py-3 font-semibold text-white transition hover:bg-emerald-700">
            Explore All Community Updates →
          </button>

        </div>

      </div>
    </section>
  );
}