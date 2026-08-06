import CommunityFeedbackModal from "../community/feedback/CommunityFeedbackModal";

export default function BusinessCommunityFeedback() {
  return (
    <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-bold text-slate-900">
        Community Feedback
      </h2>

      <p className="mt-2 text-slate-600">
        Your experience helps local businesses improve and helps neighbours make informed decisions.
      </p>

      <div className="mt-8">
        <CommunityFeedbackModal />
      </div>

    </section>
  );
}