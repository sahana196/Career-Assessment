import { SUBJECTS } from "../data/assessmentData";

function getGradeLabel(score) {
  if (!score) return { label: "—", color: "text-slate-600" };
  if (score >= 90) return { label: "A+", color: "text-emerald-400" };
  if (score >= 80) return { label: "A", color: "text-emerald-400" };
  if (score >= 70) return { label: "B+", color: "text-indigo-400" };
  if (score >= 60) return { label: "B", color: "text-indigo-400" };
  if (score >= 50) return { label: "C", color: "text-amber-400" };
  return { label: "D", color: "text-rose-400" };
}

function getBarColor(score) {
  if (!score) return "#e2e8f0";
  if (score >= 75) return "#10b981";
  if (score >= 50) return "#6366f1";
  return "#f43f5e";
}

export default function AcademicsScreen({ scores, onChange, onNext, onBack }) {
  return (
    <div className="animate-fade-up">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          <span className="text-indigo-400 text-xs font-semibold tracking-widest uppercase">Step 4 of 4</span>
        </div>
        <h2 className="font-display text-3xl text-slate-900 mb-2">Academic Strengths</h2>
        <p className="text-slate-500 text-sm">Enter your approximate scores (0–100). Leave blank if not applicable.</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="card p-6 mb-6">
          <div className="space-y-4 stagger">
            {SUBJECTS.map((s, i) => {
              const val = scores[s.id] ?? "";
              const numVal = Number(val);
              const { label, color } = getGradeLabel(numVal || 0);

              return (
                <div
                  key={s.id}
                  className="animate-fade-up flex items-center gap-4"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <span className="text-2xl w-8 text-center flex-shrink-0">{s.icon}</span>

                  <div className="w-44 flex-shrink-0">
                    <span className="text-slate-800 text-sm font-medium">{s.label}</span>
                  </div>

                  <input
                    type="number"
                    min="0"
                    max="100"
                    placeholder="—"
                    value={val}
                    onChange={e => onChange(s.id, Math.min(100, Math.max(0, Number(e.target.value))))}
                    className="w-20 px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm text-center outline-none focus:border-indigo-500/60 font-body transition-all flex-shrink-0"
                  />

                  <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${numVal || 0}%`,
                        background: getBarColor(numVal),
                      }}
                    />
                  </div>

                  <span className={`w-8 text-right text-sm font-bold flex-shrink-0 ${color}`}>
                    {val ? label : "—"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button className="btn-ghost" onClick={onBack}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>

          <button className="btn-primary" onClick={onNext}>
            View My Results
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
