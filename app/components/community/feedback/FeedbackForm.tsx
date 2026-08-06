"use client";

type Experience =
  | "excellent"
  | "good"
  | "okay"
  | "improve";

type FeedbackFormProps = {
  experience: Experience;
};

export default function FeedbackForm({
  experience,
}: FeedbackFormProps) {
  const questions = {
    excellent: {
      title: "What made your experience excellent?",
      subtitle:
        "Choose everything that stood out.",
    },

    good: {
      title: "What did you appreciate?",
      subtitle:
        "Choose everything that applies.",
    },

    okay: {
      title: "How could this business improve?",
      subtitle:
        "Help them serve Kahawa West better.",
    },

    improve: {
      title:
        "What should this business improve first?",
      subtitle:
        "Constructive feedback helps businesses grow.",
    },
  };

  const content = questions[experience];

  return (
    <div>

      <h2 className="text-2xl font-bold text-slate-900">
        {content.title}
      </h2>

      <p className="mt-2 text-slate-600">
        {content.subtitle}
      </p>

      <div className="mt-8 rounded-2xl border border-dashed border-slate-300 p-8 text-center text-slate-400">

        Checkbox options coming next...

      </div>

    </div>
  );
}