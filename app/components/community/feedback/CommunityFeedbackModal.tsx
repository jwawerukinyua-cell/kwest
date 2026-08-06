"use client";

import { useState } from "react";
import ExperienceSelector from "./ExperienceSelector";
import FeedbackForm from "./FeedbackForm";

type Experience =
  | "excellent"
  | "good"
  | "okay"
  | "improve";
export default function CommunityFeedbackModal() {
  const [experience, setExperience] =
    useState<Experience | null>(null);

  return (
    <div className="mx-auto max-w-xl rounded-3xl bg-white p-8 shadow-xl">

      {!experience && (
        <>
          <h2 className="text-2xl font-bold text-slate-900">
            Community Feedback
          </h2>

          <p className="mt-2 text-slate-600">
            Help this business serve Kahawa West better.
          </p>

          <div className="mt-8">
            <ExperienceSelector
              onSelect={setExperience}
            />
          </div>
        </>
      )}

            {experience && (
        <FeedbackForm
          experience={experience}
        />
      )}

    </div>
  );
}