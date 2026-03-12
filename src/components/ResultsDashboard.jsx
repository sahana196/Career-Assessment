import { useState } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
} from "chart.js";
import { Radar, Bar, Doughnut } from "react-chartjs-2";
import { getTraitProfile } from "../data/assessmentData";

ChartJS.register(
  RadialLinearScale, PointElement, LineElement, Filler,
  Tooltip, Legend, CategoryScale, LinearScale, BarElement, ArcElement
);

// ─── Career Card ─────────────────────────────────────────────────────────────

function CareerCard({ career, rank, isExpanded, onToggle }) {
  const isTop = rank === 0;

  return (
    <div
      className="rounded-2xl border transition-all duration-300 overflow-hidden"
      style={{
        background: isTop ? `${career.color}10` : "#fff",
        borderColor: isTop ? `${career.color}50` : "#e2e8f0",
      }}
    >
      {/* Header row */}
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 p-5 text-left hover:bg-white/[0.02] transition-colors"
      >
        <span className="text-3xl">{career.icon}</span>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-2">
            <span className="text-slate-900 font-semibold text-base">{career.title}</span>
            {isTop && (
              <span
                className="text-xs px-2.5 py-0.5 rounded-full font-bold tracking-wide"
                style={{ background: career.color, color: "#fff" }}
              >
                BEST MATCH
              </span>
            )}
            <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-500 font-bold uppercase tracking-wider">
              {career.domain}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex-1 max-w-48 h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{ width: `${career.fit}%`, background: career.color }}
              />
            </div>
            <span className="text-sm font-bold" style={{ color: career.color }}>
              {career.fit}% Fit
            </span>
          </div>
        </div>

        <svg
          className="w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0"
          style={{ transform: isExpanded ? "rotate(180deg)" : "" }}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Expanded panel */}
      {isExpanded && (
        <div className="px-5 pb-6 border-t border-slate-100 pt-5 animate-fade-in no-print">
          {/* Why match & Match Logic */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div
              className="p-4 rounded-xl border h-full"
              style={{ background: `${career.color}0d`, borderColor: `${career.color}25` }}
            >
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1.5" style={{ color: career.color }}>
                💡 Why This Matches You
              </p>
              <p className="text-slate-700 text-xs leading-relaxed">{career.whyMatch}</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl h-full">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1.5">
                🧪 Match Analysis
              </p>
              <p className="text-slate-700 text-xs leading-relaxed">
                Matches your high <strong>{career.matchLogic}</strong> traits and academic orientation.
              </p>
            </div>
          </div>

          {/* New Outlook Section */}
          <div className="bg-indigo-50/50 border border-indigo-100 p-4 rounded-xl mb-4">
             <div className="flex items-center gap-4">
               <div className="flex-1">
                 <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-600 mb-1">📈 Future Outlook</p>
                 <p className="text-xs font-semibold text-slate-800">{career.outlook}</p>
               </div>
               <div className="flex-1">
                 <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-600 mb-1">🏢 Active Industries</p>
                 <p className="text-xs font-semibold text-slate-800">{career.industry}</p>
               </div>
             </div>
          </div>

          {/* Info grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <InfoBox title="📌 Recommended Stream" items={[career.stream]} />
            <InfoBox title="🎓 Top Degrees" items={career.degrees.slice(0, 3)} />
            <InfoBox title="🛠 Skills to Build" items={career.skills.slice(0, 4)} />
            <InfoBox title="🔁 Career Alternatives" items={career.backup} />
          </div>

          {/* 5-year plan */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">📅 5-Year Roadmap</p>
            <div className="space-y-3">
              {career.plan.map((step, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0 mt-0.5"
                    style={{ background: career.color }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">{step.year} · </span>
                    <span className="text-xs text-slate-700 font-medium">{step.action}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Print only detailed block */}
      <div className="hidden print:block p-5 border-t border-slate-100">
         <p className="text-xs text-slate-700 mb-2"><strong>Stream:</strong> {career.stream}</p>
         <p className="text-xs text-slate-700 mb-2"><strong>Why Match:</strong> {career.whyMatch}</p>
         <p className="text-xs text-slate-700"><strong>Skills:</strong> {career.skills.join(", ")}</p>
      </div>
    </div>
  );
}

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

// ─── Charts ──────────────────────────────────────────────────────────────────

function FitBarChart({ results }) {
  const top5 = results.slice(0, 5);
  const data = {
    labels: top5.map(r => r.title.split(" ").slice(0, 2).join(" ")),
    datasets: [{
      label: "Career Fit %",
      data: top5.map(r => r.fit),
      backgroundColor: top5.map(r => `${r.color}cc`),
      borderColor: top5.map(r => r.color),
      borderWidth: 1,
      borderRadius: 8,
      borderSkipped: false,
    }],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#fff",
        borderColor: "rgba(99,102,241,0.3)",
        borderWidth: 1,
        titleColor: "#0f1629",
        bodyColor: "#334155",
        callbacks: {
          label: ctx => ` ${ctx.parsed.y}% Fit`,
        },
      },
    },
    scales: {
      x: {
        grid: { color: "rgba(0,0,0,0.05)" },
        ticks: { color: "#64748b", font: { size: 10 } },
      },
      y: {
        min: 0,
        max: 100,
        grid: { color: "rgba(0,0,0,0.05)" },
        ticks: { color: "#64748b", font: { size: 10 }, callback: v => `${v}%` },
      },
    },
  };

  return (
    <div className="card p-5">
      <h3 className="font-display text-base text-slate-900 mb-4">Top 5 Career Fit Scores</h3>
      <div style={{ height: 180 }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

function TraitRadarChart({ answers }) {
  const traits = getTraitProfile(answers);
  const keys = ["analytical", "creative", "social", "technical", "literary", "leadership", "scientific", "quantitative"];
  const maxVal = Math.max(...keys.map(k => traits[k] || 0), 1);

  const data = {
    labels: ["Analytical", "Creative", "Social", "Technical", "Literary", "Leadership", "Scientific", "Quantitative"],
    datasets: [{
      label: "Your Trait Profile",
      data: keys.map(k => Math.round(((traits[k] || 0) / maxVal) * 100)),
      backgroundColor: "rgba(99,102,241,0.1)",
      borderColor: "#6366f1",
      pointBackgroundColor: "#6366f1",
      pointBorderColor: "#fff",
      pointRadius: 3,
      borderWidth: 2,
    }],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      r: {
        min: 0,
        max: 100,
        grid: { color: "rgba(0,0,0,0.06)" },
        angleLines: { color: "rgba(0,0,0,0.06)" },
        pointLabels: { color: "#64748b", font: { size: 9 } },
        ticks: { display: false },
      },
    },
  };

  return (
    <div className="card p-5">
      <h3 className="font-display text-base text-slate-900 mb-4">Trait Analysis</h3>
      <div style={{ height: 200 }}>
        <Radar data={data} options={options} />
      </div>
    </div>
  );
}

function StreamDoughnut({ topCareers }) {
  const streams = topCareers.slice(0, 4).map(c => c.stream.split(" ")[0]);
  const counts = {};
  streams.forEach(s => { counts[s] = (counts[s] || 0) + 1; });

  const data = {
    labels: Object.keys(counts),
    datasets: [{
      data: Object.values(counts),
      backgroundColor: ["#6366f1cc", "#10b981cc", "#f43f5ecc", "#f59e0bcc"],
      borderColor: ["#6366f1", "#10b981", "#f43f5e", "#f59e0b"],
      borderWidth: 2,
    }],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: { color: "#64748b", font: { size: 9 }, boxWidth: 8, padding: 10 },
      },
    },
  };

  return (
    <div className="card p-5">
      <h3 className="font-display text-base text-slate-900 mb-4">Recommended Streams</h3>
      <div style={{ height: 180 }}>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────

export default function ResultsDashboard({ profile, results, answers, onRestart }) {
  const [expanded, setExpanded] = useState(0);
  const [activeTab, setActiveTab] = useState("domains");

  const { careers, domains, confidence } = results;
  const top = careers[0];

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="animate-fade-in" id="report">
      {/* Hero banner */}
      <div className="card p-6 mb-6 relative overflow-hidden bg-slate-900 text-white">
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: `radial-gradient(ellipse at 80% 50%, ${top.color}, transparent 70%)` }}
        />
        <div className="relative flex items-center justify-between">
          <div className="flex items-start gap-4">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
              style={{ background: `rgba(255,255,255,0.1)`, backdropFilter: "blur(10px)", border: `1px solid rgba(255,255,255,0.2)` }}
            >
              {top.icon}
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-300 mb-0.5">Psychometric Career Report</p>
              <h2 className="font-display text-2xl text-white mb-1">
                {profile.name}'s Analysis
              </h2>
              <p className="text-slate-300 text-sm">
                Top Recommendation: <span className="font-bold text-white uppercase tracking-wide">{top.title}</span>
              </p>
            </div>
          </div>
          
          <div className="text-right hidden sm:block">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 border border-white/20">
               <span className="text-xs font-bold text-indigo-200">Confidence:</span>
               <span className={`text-sm font-bold ${confidence > 85 ? 'text-green-400' : 'text-yellow-400'}`}>
                 {confidence}%
               </span>
            </div>
            <p className="text-[9px] text-slate-400 mt-1 uppercase tracking-wider">Reliability Score</p>
          </div>
        </div>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <div className="card p-4">
           <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">Top Match</p>
           <p className="font-bold text-slate-900 truncate">{top.title}</p>
        </div>
        <div className="card p-4">
           <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">Fit Index</p>
           <p className="font-bold text-indigo-600">{top.fit}%</p>
        </div>
        <div className="card p-4">
           <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">Top Cluster</p>
           <p className="font-bold text-slate-900">{domains[0].name}</p>
        </div>
        <div className="card p-4">
           <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">Confidence</p>
           <p className={`font-bold ${confidence > 85 ? 'text-green-600' : 'text-amber-600'}`}>{confidence}%</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-5 p-1 bg-slate-100/50 rounded-xl border border-slate-200 no-print">
        {[
          { key: "domains", label: "Career Domains" },
          { key: "careers", label: "Specific Roles" },
          { key: "charts",  label: "Profile Analytics" },
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all duration-200 ${
              activeTab === tab.key
                ? "bg-white text-indigo-600 shadow-sm border border-slate-200"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Domain analysis - The "Clusters" Layer */}
      {activeTab === "domains" && (
        <div className="space-y-4 animate-fade-in">
           <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <h3 className="font-display text-lg text-slate-900 mb-2">High-Level Domain Alignment</h3>
              <p className="text-xs text-slate-500 mb-6">Your answers suggest you are most naturally suited for these broad career clusters.</p>
              
              <div className="space-y-6">
                {domains.slice(0, 3).map((domain, i) => (
                   <div key={domain.name} className="animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                      <div className="flex justify-between items-end mb-2">
                        <span className="text-sm font-bold text-slate-800">{domain.name}</span>
                        <span className="text-xs font-bold text-indigo-600">{domain.fit}% Affinity</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full transition-all duration-1000"
                          style={{ width: `${domain.fit}%`, transitionDelay: `${i * 150}ms` }}
                        />
                      </div>
                   </div>
                ))}
              </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="card p-5 border-l-4 border-l-green-500">
                 <h4 className="text-xs font-bold text-slate-900 mb-2 font-display uppercase tracking-wider">Career Consistency</h4>
                 <p className="text-xs text-slate-600 leading-relaxed">
                   Your {confidence}% confidence score indicates your interests and academic strengths in <strong>{domains[0].name}</strong> are well-aligned. {confidence > 85 ? 'This profile is highly reliable.' : 'Consider focusing more on your top academic subjects.'}
                 </p>
              </div>
              <div className="card p-5 border-l-4 border-l-indigo-500">
                 <h4 className="text-xs font-bold text-slate-900 mb-2 font-display uppercase tracking-wider">Primary Strength</h4>
                 <p className="text-xs text-slate-600 leading-relaxed">
                   The assessment highlights a dominant strength in the <strong>{top.domain}</strong> sector, specifically aligned with your <strong>{top.matchLogic}</strong> traits.
                 </p>
              </div>
           </div>
        </div>
      )}

      {/* Career matches tab */}
      {activeTab === "careers" && (
        <div className="space-y-3 stagger">
          {careers.map((career, i) => (
            <div key={career.title} className="animate-fade-up">
              <CareerCard
                career={career}
                rank={i}
                isExpanded={expanded === i}
                onToggle={() => setExpanded(expanded === i ? null : i)}
              />
            </div>
          ))}
        </div>
      )}

      {/* Charts / analytics tab */}
      {activeTab === "charts" && (
        <div className="space-y-4 animate-fade-in">
          <FitBarChart results={careers} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TraitRadarChart answers={answers} />
            <StreamDoughnut topCareers={careers} />
          </div>
        </div>
      )}

      {/* Print only detailed metrics */}
      <div className="hidden print:block mt-8 border-t pt-8">
         <h3 className="font-display text-xl mb-4">Detailed Technical Profile</h3>
         <TraitRadarChart answers={answers} />
         <div className="mt-8">
           <h4 className="font-bold text-sm mb-4">Top 3 Primary Domains</h4>
           {domains.slice(0, 3).map(d => (
             <p key={d.name} className="text-xs mb-2">{d.name}: {d.fit}% match</p>
           ))}
         </div>
      </div>

      {/* Dashboard Actions */}
      <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 no-print">
        <div className="flex items-center gap-4">
           <button 
             className="btn-primary" 
             onClick={handleDownload}
           >
             <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
             </svg>
             Download Full Report
           </button>
           <button className="btn-ghost" onClick={onRestart}>Retake</button>
        </div>
        <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Mailing Data Solutions · Psychometric Dept</p>
      </div>
    </div>
  );
}
