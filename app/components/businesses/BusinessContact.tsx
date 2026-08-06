type BusinessContactProps = {
  whatsapp?: string;
};

export default function BusinessContact({
  whatsapp,
}: BusinessContactProps) {
  return (
    <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-bold text-slate-900">
        Connect with this Business
      </h2>

      <p className="mt-2 text-slate-600">
        Call, message or visit this business directly.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">

        <a
  href={whatsapp ? `https://wa.me/${whatsapp}` : "#"}
  target="_blank"
  rel="noopener noreferrer"
  className={`rounded-xl border border-emerald-600 px-5 py-4 text-center font-semibold transition ${
    whatsapp
      ? "text-emerald-700 hover:bg-emerald-50"
      : "cursor-not-allowed text-slate-400"
  }`}
>
  💬 WhatsApp
</a>

        <a
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-emerald-600 px-5 py-4 text-center font-semibold text-emerald-700 transition hover:bg-emerald-50"
        >
          💬 WhatsApp
        </a>

        <button className="rounded-xl border border-slate-300 px-5 py-4 font-semibold text-slate-700 transition hover:bg-slate-100">
          📍 Directions
        </button>

      </div>

    </section>
  );
}