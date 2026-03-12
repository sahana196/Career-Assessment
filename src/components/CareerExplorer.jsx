import { useState } from "react";
import { CAREER_MAP } from "../data/assessmentData";

function InfoBox({ title, items }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-3">
      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">{title}</p>
      <ul className="space-y-1">
        {items.map((item, i) => (
          <li key={i} className="text-xs text-slate-700 font-medium flex gap-1.5 items-start">
            <span className="text-indigo-400 mt-0.5">›</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CareerCard({ career, isExpanded, onToggle }) {
  return (
    <div
      className="rounded-2xl border transition-all duration-300 overflow-hidden bg-white hover:border-indigo-200 hover:shadow-md"
      style={{ borderColor: isExpanded ? `${career.color}40` : "#e2e8f0" }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 p-5 text-left transition-colors"
      >
        <span className="text-3xl">{career.icon}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span className="text-slate-900 font-semibold text-base">{career.title}</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-500 font-bold uppercase tracking-wider">
              {career.domain}
            </span>
          </div>
          <p className="text-xs text-slate-500 truncate">{career.stream}</p>
        </div>
        <svg
          className="w-5 h-5 text-slate-400 transition-transform duration-300"
          style={{ transform: isExpanded ? "rotate(180deg)" : "" }}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isExpanded && (
        <div className="px-5 pb-6 border-t border-slate-100 pt-5 animate-fade-in bg-slate-50/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="p-4 rounded-xl border bg-white border-slate-200">
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1.5 text-indigo-600">
                🚀 About this Role
              </p>
              <p className="text-slate-700 text-xs leading-relaxed">{career.whyMatch}</p>
            </div>
            <div className="bg-indigo-50/50 border border-indigo-100 p-4 rounded-xl h-full">
              <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-600 mb-1">📈 Future Outlook</p>
              <p className="text-xs font-semibold text-slate-800">{career.outlook}</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-600 mt-2 mb-1">🏢 Active Industries</p>
              <p className="text-xs font-semibold text-slate-800">{career.industry}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <InfoBox title="📌 Recommended Stream" items={[career.stream]} />
            <InfoBox title="🎓 Top Degrees" items={career.degrees.slice(0, 3)} />
            <InfoBox title="🛠 Skills to Build" items={career.skills.slice(0, 4)} />
            <InfoBox title="🔁 Career Alternatives" items={career.backup} />
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">📅 5-Year Roadmap</p>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {career.plan.map((step, i) => (
                <div key={i} className="flex flex-col gap-1 items-start">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white mb-1"
                    style={{ background: career.color }}
                  >
                    {i + 1}
                  </div>
                  <p className="text-[9px] font-bold text-slate-400 capitalize">{step.year}</p>
                  <p className="text-[10px] text-slate-700 font-medium leading-tight">{step.action}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function CareerExplorer() {
  const [search, setSearch] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("All");
  const [expanded, setExpanded] = useState(null);

  const domains = ["All", ...new Set(CAREER_MAP.map(c => c.domain))];

  const filtered = CAREER_MAP.filter(c => {
    const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase()) || 
                         c.domain.toLowerCase().includes(search.toLowerCase()) ||
                         c.whyMatch.toLowerCase().includes(search.toLowerCase());
    const matchesDomain = selectedDomain === "All" || c.domain === selectedDomain;
    return matchesSearch && matchesDomain;
  });

  return (
    <div className="animate-fade-in space-y-8 pb-10">
      <div className="text-center">
        <h2 className="font-display text-3xl text-slate-900 mb-2">Career Library</h2>
        <p className="text-slate-500 text-sm max-w-md mx-auto">
          Explore {CAREER_MAP.length} high-demand careers, their degree pathways, and 5-year growth plans.
        </p>
      </div>

      {/* Search & Filter */}
      <div className="card p-4 space-y-4 shadow-xl border-slate-200/60 sticky top-4 z-10 bg-white/80 backdrop-blur-md">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by career, field or keyword..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-field pl-10"
          />
          <svg className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <div className="flex gap-2 flex-wrap">
          {domains.map(domain => (
            <button
              key={domain}
              onClick={() => setSelectedDomain(domain)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                selectedDomain === domain
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-100"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {domain}
            </button>
          ))}
        </div>
      </div>

      {/* List */}
      <div className="space-y-4">
        {filtered.length > 0 ? (
          filtered.map((career, i) => (
            <div key={career.title} className="animate-fade-up" style={{ animationDelay: `${i * 50}ms` }}>
              <CareerCard
                career={career}
                isExpanded={expanded === i}
                onToggle={() => setExpanded(expanded === i ? null : i)}
              />
            </div>
          ))
        ) : (
          <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
            <div className="text-4xl mb-4">🔍</div>
            <p className="text-slate-500 font-medium">No careers found matching "{search}"</p>
            <button 
              onClick={() => { setSearch(""); setSelectedDomain("All"); }}
              className="mt-4 text-indigo-600 font-bold text-sm hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
