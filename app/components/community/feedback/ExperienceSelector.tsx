"use client";

type Experience =
  | "excellent"
  | "good"
  | "okay"
  | "improve";

type ExperienceSelectorProps = {
  onSelect: (experience: Experience) => void;
};

const experiences = [
  {
    id: "excellent",
    emoji: "😊",
    title: "Excellent",
    subtitle: "Outstanding experience",
    accent: "border-emerald-200 hover:bg-emerald-50 hover:border-emerald-500",
    emojiBg: "bg-emerald-100",
  },
  {
    id: "good",
    emoji: "🙂",
    title: "Good",
    subtitle: "Met expectations",
    accent: "border-sky-200 hover:bg-sky-50 hover:border-sky-500",
    emojiBg: "bg-sky-100",
  },
  {
    id: "okay",
    emoji: "😐",
    title: "Okay",
    subtitle: "Room for improvement",
    accent: "border-amber-200 hover:bg-amber-50 hover:border-amber-500",
    emojiBg: "bg-amber-100",
  },
  {
    id: "improve",
    emoji: "🙁",
    title: "Needs Improvement",
    subtitle: "Help them do better",
    accent: "border-rose-200 hover:bg-rose-50 hover:border-rose-500",
    emojiBg: "bg-rose-100",
  },
] as const;

export default function ExperienceSelector({
  onSelect,
}: ExperienceSelectorProps) {
  return (
    <div className="grid gap-4">
      {experiences.map((experience) => (
       <button
  key={experience.id}
  onClick={() => onSelect(experience.id)}
  className={`
    rounded-2xl
    border
    bg-white
    p-5
    text-left
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-lg
    ${experience.accent}
  `}
>
          <div
  className={`flex h-14 w-14 items-center justify-center rounded-full text-3xl ${experience.emojiBg}`}
>
  {experience.emoji}
</div>

          <h3 className="mt-3 text-lg font-semibold text-slate-900">
            {experience.title}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {experience.subtitle}
          </p>
        </button>
      ))}
    </div>
  );
}