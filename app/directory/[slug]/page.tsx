import { notFound } from "next/navigation";

import { businesses } from "../../data/businesses";
import { categories } from "../../data/categories";

import BusinessHero from "../../components/businesses/BusinessHero";
import CommunityFeedbackModal from "../../components/community/feedback/CommunityFeedbackModal";

type BusinessPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BusinessPage({
  params,
}: BusinessPageProps) {
  const { slug } = await params;

  const business = businesses.find(
    (business) => business.slug === slug
  );

  if (!business) {
    notFound();
  }

  const category = categories.find(
    (category) => category.id === business.categoryId
  );

  return (
    <main className="mx-auto max-w-6xl px-5 py-10">

      <BusinessHero
        name={business.name}
        category={category?.name ?? "Uncategorized"}
        landmark={business.landmark}
        verified={business.verified}
        rating={business.rating}
      />

      {/* About */}

      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

        <h2 className="text-2xl font-bold text-slate-900">
          About
        </h2>

        <p className="mt-4 leading-8 text-slate-600">
          {business.description}
        </p>

      </section>

      {/* Contact */}

      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

        <h2 className="text-2xl font-bold text-slate-900">
          Contact
        </h2>

        <p className="mt-2 text-slate-600">
          Reach this business directly.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">

          <a
            href={`tel:${business.phone}`}
            className="rounded-xl bg-emerald-600 px-5 py-4 text-center font-semibold text-white transition hover:bg-emerald-700"
          >
            📞 Call
          </a>

          <a
            href={`https://wa.me/${business.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-emerald-600 px-5 py-4 text-center font-semibold text-emerald-700 transition hover:bg-emerald-50"
          >
            💬 WhatsApp
          </a>

          <button
            className="rounded-xl border border-slate-300 px-5 py-4 font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            📍 Directions
          </button>

        </div>

      </section>

      {/* Community Feedback */}

      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

        <h2 className="text-2xl font-bold text-slate-900">
          Community Feedback
        </h2>

        <p className="mt-2 text-slate-600">
          Help this business serve Kahawa West better.
        </p>

        <div className="mt-8">
          <CommunityFeedbackModal />
        </div>

      </section>

    </main>
  );
}