import Button from "../ui/Button";
import VerifiedBadge from "../ui/VerifiedBadge";

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
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Business Photo */}

      <div className="relative flex h-52 items-center justify-center bg-slate-200">

        <span className="text-center text-sm font-medium leading-6 text-slate-500">
          Business Photo
          <br />
          Coming Soon
        </span>

        <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow">
          📷 3 Photos
        </div>

      </div>

      {/* Content */}

      <div className="p-6">

        {/* Business Name */}

        <div className="flex items-start justify-between gap-3">

          <h3 className="text-xl font-semibold leading-7 text-slate-900">
            {name}
          </h3>

          {verified && <VerifiedBadge />}

        </div>

        {/* Category */}

        <span className="mt-4 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
          {category}
        </span>

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
            {rating} / 5.0
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

      </div>

    </article>
  );
}