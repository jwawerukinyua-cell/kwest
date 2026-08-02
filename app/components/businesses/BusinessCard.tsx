type BusinessCardProps = {
  name: string;
  category: string;
  landmark: string;
  rating: number;
  verified: boolean;
  phone?: string;
  whatsapp?: string;
};

export default function BusinessCard({
  name,
  category,
  landmark,
  rating,
  verified,
  phone,
  whatsapp,
}: BusinessCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">

      {/* Business Photo Placeholder */}

      <div className="relative flex h-44 items-center justify-center bg-slate-200">
        <span className="text-slate-500 font-medium">
          Business Photo
        </span>

        <div className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow">
          📷 3 Photos
        </div>
      </div>

      {/* Content */}

      <div className="p-5">

        {/* Business Name */}

        <div className="flex items-start justify-between gap-3">

          <h3 className="text-lg font-bold text-slate-900">
            {name}
          </h3>

          {verified && (
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
              ✔ Verified
            </span>
          )}

        </div>

        {/* Category */}

        <span className="mt-3 inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
          {category}
        </span>

        {/* Landmark */}

        <p className="mt-4 text-sm text-slate-600">
          📍 {landmark}
        </p>

        {/* Rating */}

        <p className="mt-2 text-sm font-medium text-amber-500">
          ⭐ {rating}
        </p>

        {/* Action Buttons */}

        <div className="mt-6 grid grid-cols-2 gap-3">

          <a
            href={phone ? `tel:${phone}` : "#"}
            className="flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            📞 Call
          </a>

          <a
            href={whatsapp ? `https://wa.me/${whatsapp}` : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            💬 WhatsApp
          </a>

        </div>

      </div>

    </div>
  );
}