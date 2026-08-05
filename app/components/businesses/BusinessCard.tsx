import Button from "../ui/Button";
import VerifiedBadge from "../ui/VerifiedBadge";
import { isOpenNow } from "../../lib/isOpenNow";

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
 
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Business Photo */}

      <div className="relative flex h-52 flex-col items-center justify-center bg-gradient-to-br from-emerald-50 via-slate-50 to-emerald-100">

  <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md">
  <span className="text-3xl">
  
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

        <p className="mt-5 text-base leading-7 text-slate-600">
          📍 {landmark}
        </p>

        {/* Rating */}

<div className="mt-3 flex items-center gap-2">

  <span className="text-amber-500">
    ⭐
  </span>

  <span className="text-sm font-medium text-slate-700">
    {rating > 0 ? `${rating} / 5.0` : "New Listing"}
  </span>

</div>

        {/* Actions */}

<div className="mt-8 grid grid-cols-2 gap-3">

  <a
    href={phone ? `tel:${phone}` : "#"}
    aria-label={`Call ${name}`}
  >
    <Button variant="secondary" className="w-full">
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
  href={`/directory/${name.toLowerCase().replace(/\s+/g, "-").replace(/'/g, "")}`}
  className="mt-4 block text-center font-semibold text-emerald-700 transition hover:text-emerald-800"
>
  View Business →
</a>

      </div>

    </article>
  );
}