const LABELS = ["Strongly\nDisagree", "Disagree", "Neutral", "Agree", "Strongly\nAgree"];
const COLORS = ["#f43f5e", "#fb923c", "#94a3b8", "#34d399", "#6366f1"];

function LikertRow({ index, question, value, onChange }) {
  return (
    <div
      className="animate-fade-up p-5 rounded-xl border border-slate-200 bg-white hover:border-indigo-500/30 hover:shadow-md transition-all duration-200"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <p className="text-slate-800 text-sm leading-relaxed mb-4 font-body font-medium">{question}</p>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((v) => (
          <button
            key={v}
            onClick={() => onChange(v)}
            className="likert-btn"
            style={{
              background: value === v ? COLORS[v - 1] : "#f8fafc",
              borderColor: value === v ? COLORS[v - 1] : "#cbd5e1",
              color: value === v ? "#fff" : "#64748b",
              transform: value === v ? "scale(1.08)" : "scale(1)",
            }}
          >
            {v}
          </button>
        ))}
      </div>
      <div className="flex justify-between mt-1.5 px-0.5">
        <span className="text-slate-500 text-[10px] font-medium">Strongly Disagree</span>
        <span className="text-slate-500 text-[10px] font-medium">Strongly Agree</span>
      </div>
    </div>
  );
}

export default function LikertScreen({ stepLabel, title, subtitle, questions, answers, onChange, onNext, onBack }) {
  const allAnswered = questions.every(q => answers[q.id]);

  return (
    <div className="animate-fade-up">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          <span className="text-indigo-400 text-xs font-semibold tracking-widest uppercase">{stepLabel}</span>
        </div>
        <h2 className="font-display text-3xl text-slate-900 mb-2">{title}</h2>
        <p className="text-slate-500 text-sm">{subtitle}</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="space-y-3 stagger mb-8">
          {questions.map((q, i) => (
            <LikertRow
              key={q.id}
              index={i}
              question={q.text}
              value={answers[q.id]}
              onChange={v => onChange(q.id, v)}
            />
          ))}
        </div>

        <div className="flex items-center justify-between pt-2">
          <button className="btn-ghost" onClick={onBack}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500 font-medium">
              {Object.keys(answers).filter(k => questions.some(q => q.id === k && answers[k])).length}/{questions.length} answered
            </span>
            <button
              className="btn-primary"
              disabled={!allAnswered}
              onClick={() => allAnswered && onNext()}
            >
              Continue
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
