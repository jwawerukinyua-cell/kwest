import { isOpenNow } from "../../lib/isOpenNow";

type OpeningHour = {
  day: string;
  open: string;
  close: string;
  closed: boolean;
};

type BusinessOpeningHoursProps = {
  openingHours: OpeningHour[];
};

export default function BusinessOpeningHours({
  openingHours,
}: BusinessOpeningHoursProps) {
  const open = isOpenNow(openingHours);

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
  });

  return (
    <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-900">
            Business Hours
          </h2>

          <p className="mt-2 text-slate-600">
            Typical business hours. Business owners can update these after claiming their listing.
          </p>

        </div>

        <span
          className={`rounded-full px-4 py-2 text-sm font-semibold ${
            open
              ? "bg-emerald-100 text-emerald-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {open ? "🟢 Open Now" : "🔴 Closed"}
        </span>

      </div>

      <div className="mt-8 divide-y divide-slate-100">

        {openingHours.map((day) => (

          <div
            key={day.day}
            className={`flex items-center justify-between rounded-xl px-3 py-4 ${
              day.day === today
                ? "bg-emerald-50"
                : ""
            }`}
          >

            <span className="font-medium text-slate-700">

              {day.day === today
                ? "🟢 Today"
                : day.day.slice(0, 3)}

            </span>

            <span
              className={
                day.closed
                  ? "text-slate-400"
                  : "text-slate-700"
              }
            >
              {day.closed
                ? "— Closed —"
                : `${day.open} – ${day.close}`}
            </span>

          </div>

        ))}

      </div>

    </section>
  );
}