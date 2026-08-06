import Button from "../ui/Button";
import VerifiedBadge from "../ui/VerifiedBadge";
import {
  isOpenNow,
  getTodaySchedule,
} from "../../lib/isOpenNow";

type BusinessCardProps = {
  name: string;
  category: string;
  categoryIcon: string;
  landmark: string;
  rating: number;
  verified: boolean;
  phone?: string;
  whatsapp?: string;

  openingHours: {
    day: string;
    open: string;
    close: string;
    closed: boolean;
  }[];
};

export default function BusinessCard({
  name,
  category,
  categoryIcon,
  landmark,
  rating,
  verified,
  phone,
  whatsapp,
  openingHours,
}: BusinessCardProps) {
  const open = isOpenNow(openingHours);
  const today = getTodaySchedule(openingHours);

  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Business Photo */}
      <div className="relative flex h-52 flex-col items-center justify-center bg-gradient-to-br from-emerald-50 via-slate-50 to-emerald-100">

        <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md">
          <span className="text-3xl">
            {categoryIcon}
          </span>
        </div>

        <h4 className="text-base font-semibold text-slate-800">
          Business Photos
        </h4>

        <p className="mt-1 text-center text-sm leading-6 text-slate-500">
          Business owner can upload
          <br />
          up to 3 photos
        </p>

        <div className="absolute right-4 top-4 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white shadow">
          📷 Coming Soon
        </div>

      </div>

      {/* Content */}
      <div className="space-y-4 p-6">

        {/* Business Name */}
        <div className="flex items-start justify-between gap-3">

          <h3 className="text-xl font-semibold leading-7 text-slate-900">
            {name}
          </h3>

          {verified && <VerifiedBadge />}

        </div>

        {/* Category + Status */}
        <div className="mt-4 flex flex-wrap items-center gap-2">

          <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
            {category}
          </span>

          <span
            className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
              open
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {open ? "🟢 Open Now" : "🔴 Closed"}
          </span>

        </div>

        {/* Location */}
        <p className="mt-5 flex items-center gap-2 text-sm text-slate-600">
          📍 {landmark}
        </p>

        {/* Opening Hours */}
        <div className="space-y-1 text-sm">

          <p className="flex items-center gap-2 text-slate-600">
            🕒 Today
            <span className="font-medium">
              {today?.closed
                ? "Closed"
                : `${today?.open} – ${today?.close}`}
            </span>
          </p>

          <p
            className={`flex items-center gap-2 ${
              open ? "text-emerald-700" : "text-slate-500"
            }`}
          >
            {open
              ? "🟢 Open now"
              : "🔴 Currently closed"}
          </p>

        </div>

        {/* Community Feedback */}

<div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">

  

</div>

        {/* Actions */}
        <div className="mt-8 grid grid-cols-2 gap-3">

          <a
            href={phone ? `tel:${phone}` : "#"}
            aria-label={`Call ${name}`}
          >
            <Button
              variant="secondary"
              className="w-full"
            >
              📞 Call
            </Button>
          </a>

          <a
            href={whatsapp ? `https://wa.me/${whatsapp}` : "#"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp ${name}`}
          >
            <Button className="w-full">
              💬 WhatsApp
            </Button>
          </a>

        </div>

        <a
          href={`/directory/${name
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/'/g, "")}`}
          className="mt-4 block text-center font-semibold text-emerald-700 transition hover:text-emerald-800"
        >
          View Business →
        </a>

      </div>

    </article>
  );
}