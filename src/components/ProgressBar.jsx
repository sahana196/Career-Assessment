const STEPS = [
  { key: "register",    label: "Profile" },
  { key: "interests",   label: "Interests" },
  { key: "personality", label: "Personality" },
  { key: "academics",   label: "Academics" },
  { key: "results",     label: "Results" },
];

export default function ProgressBar({ step }) {
  const currentIdx = STEPS.findIndex(s => s.key === step);

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between relative">
        {/* connecting line */}
        <div className="absolute top-3.5 left-0 right-0 h-px bg-slate-200" />
        <div
          className="absolute top-3.5 left-0 h-px bg-indigo-500 transition-all duration-700"
          style={{ width: `${(currentIdx / (STEPS.length - 1)) * 100}%` }}
        />

        {STEPS.map((s, i) => {
          const done = i < currentIdx;
          const active = i === currentIdx;
          return (
            <div key={s.key} className="flex flex-col items-center gap-1.5 relative z-10">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 text-xs font-bold"
                style={{
                  background: done ? "#6366f1" : active ? "#6366f1" : "#f8fafc",
                  border: active ? "2px solid #818cf8" : done ? "2px solid #6366f1" : "2px solid #e2e8f0",
                  boxShadow: active ? "0 0 12px rgba(99,102,241,0.2)" : "none",
                }}
              >
                {done ? (
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span style={{ color: active ? "#fff" : "#64748b" }}>{i + 1}</span>
                )}
              </div>
              <span
                className="text-xs font-medium transition-colors"
                style={{ color: active ? "#4f46e5" : done ? "#6366f1" : "#64748b" }}
              >
                {s.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
