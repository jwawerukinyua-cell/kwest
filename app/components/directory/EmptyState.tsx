import Button from "../ui/Button";

type EmptyStateProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
};

export default function EmptyState({
  title = "No businesses found",
  description = "We couldn't find any businesses matching your search or selected filters. Try another search or browse a different category.",
  buttonText = "Clear Filters",
  onButtonClick,
}: EmptyStateProps) {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-5 py-20 text-center">

        {/* Illustration */}

        <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100 text-5xl">
          🔍
        </div>

        {/* Title */}

        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          {title}
        </h2>

        {/* Description */}

        <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
          {description}
        </p>

        {/* CTA */}

        <div className="mt-10">

          <Button
            variant="secondary"
            onClick={onButtonClick}
          >
            {buttonText}
          </Button>

        </div>

      </div>
    </section>
  );
}