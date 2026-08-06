type BusinessAboutProps = {
  description: string;
};

export default function BusinessAbout({
  description,
}: BusinessAboutProps) {
  return (
    <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-bold text-slate-900">
        About
      </h2>

      <p className="mt-4 leading-8 text-slate-600">
        {description}
      </p>

    </section>
  );
}