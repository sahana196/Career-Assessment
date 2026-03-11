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
            {rank === 1 && (
              <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-slate-100 text-slate-600 border border-slate-200">
                2nd Match
              </span>
            )}
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
          className="w-5 h-5 text-slate-600 transition-transform duration-300 flex-shrink-0"
          style={{ transform: isExpanded ? "rotate(180deg)" : "" }}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Expanded panel */}
      {isExpanded && (
        <div className="px-5 pb-6 border-t border-slate-100 pt-5 animate-fade-in">
          {/* Why match */}
          <div
            className="p-4 rounded-xl mb-4 border"
            style={{ background: `${career.color}0d`, borderColor: `${career.color}25` }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: career.color }}>
              💡 Why This Matches You
            </p>
            <p className="text-slate-700 text-sm leading-relaxed">{career.whyMatch}</p>
          </div>

          {/* Info grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <InfoBox title="📌 Stream" items={[career.stream]} />
            <InfoBox title="🎓 Degrees" items={career.degrees.slice(0, 3)} />
            <InfoBox title="🛠 Skills to Build" items={career.skills.slice(0, 4)} />
            <InfoBox title="🔁 Backup Careers" items={career.backup} />
          </div>

          {/* 5-year plan */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">📅 5-Year Action Plan</p>
            <div className="space-y-2.5">
              {career.plan.map((step, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 mt-0.5"
                    style={{ background: career.color }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">{step.year} · </span>
                    <span className="text-sm text-slate-700 font-medium">{step.action}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function InfoBox({ title, items }) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5">
      <p className="text-xs font-semibold text-slate-600 mb-2">{title}</p>
      <ul className="space-y-1">
        {items.map((item, i) => (
          <li key={i} className="text-xs text-slate-700 font-medium flex gap-1.5 items-start">
            <span className="text-indigo-500 mt-0.5">›</span>
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
        ticks: { color: "#64748b", font: { size: 11 } },
      },
      y: {
        min: 0,
        max: 100,
        grid: { color: "rgba(0,0,0,0.05)" },
        ticks: { color: "#64748b", font: { size: 11 }, callback: v => `${v}%` },
      },
    },
  };

  return (
    <div className="card p-5">
      <h3 className="font-display text-base text-slate-900 mb-4">Career Fit Comparison</h3>
      <div style={{ height: 200 }}>
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
      backgroundColor: "rgba(99,102,241,0.15)",
      borderColor: "#6366f1",
      pointBackgroundColor: "#818cf8",
      pointBorderColor: "#fff",
      pointRadius: 4,
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
        pointLabels: { color: "#64748b", font: { size: 10 } },
        ticks: { display: false },
      },
    },
  };

  return (
    <div className="card p-5">
      <h3 className="font-display text-base text-slate-900 mb-4">Your Trait Profile</h3>
      <div style={{ height: 220 }}>
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
        labels: { color: "#64748b", font: { size: 10 }, boxWidth: 10, padding: 12 },
      },
    },
  };

  return (
    <div className="card p-5">
      <h3 className="font-display text-base text-slate-900 mb-4">Recommended Streams</h3>
      <div style={{ height: 200 }}>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────

export default function ResultsDashboard({ profile, results, answers, onRestart }) {
  const [expanded, setExpanded] = useState(0);
  const [activeTab, setActiveTab] = useState("careers");

  const top = results[0];

  return (
    <div className="animate-fade-in">
      {/* Hero banner */}
      <div className="card p-6 mb-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ background: `radial-gradient(ellipse at 80% 50%, ${top.color}, transparent 70%)` }}
        />
        <div className="relative flex items-start gap-4">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
            style={{ background: `${top.color}22`, border: `1px solid ${top.color}40` }}
          >
            {top.icon}
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-0.5">Assessment Complete</p>
            <h2 className="font-display text-2xl text-slate-900 mb-1">
              {profile.name}'s Career Report
            </h2>
            <p className="text-slate-500 text-sm">
              Top match: <span className="font-semibold" style={{ color: top.color }}>{top.title}</span>
              <span className="text-slate-600 mx-2">·</span>
              {top.fit}% Fit
              <span className="text-slate-600 mx-2">·</span>
              Grade {profile.grade}
              {profile.city && <><span className="text-slate-600 mx-2">·</span>{profile.city}</>}
            </p>
          </div>
        </div>
      </div>

      {/* Stat pills */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {[
          { label: "Best Match", value: top.title.split(" ").slice(0, 2).join(" "), icon: "🏆", color: top.color },
          { label: "Fit Score", value: `${top.fit}%`, icon: "📈", color: "#10b981" },
          { label: "Stream", value: top.stream.split(" ")[0], icon: "🎓", color: "#f59e0b" },
        ].map(stat => (
          <div key={stat.label} className="card p-4 text-center">
            <div className="text-2xl mb-1">{stat.icon}</div>
            <div className="font-bold text-base" style={{ color: stat.color }}>{stat.value}</div>
            <div className="text-xs text-slate-600 mt-0.5">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-5 p-1 bg-slate-100 rounded-xl border border-slate-200">
        {[
          { key: "careers", label: "Career Matches" },
          { key: "charts",  label: "Analytics" },
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
              activeTab === tab.key
                ? "bg-indigo-500 text-white shadow-lg"
                : "text-slate-500 hover:text-slate-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Career matches tab */}
      {activeTab === "careers" && (
        <div className="space-y-3 stagger">
          {results.map((career, i) => (
            <div key={career.title} className="animate-fade-up" style={{ animationDelay: `${i * 60}ms` }}>
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
          <FitBarChart results={results} />
          <div className="grid grid-cols-2 gap-4">
            <TraitRadarChart answers={answers} />
            <StreamDoughnut topCareers={results} />
          </div>
          <div className="card p-5">
            <h3 className="font-display text-base text-slate-900 mb-4">All Career Scores</h3>
            <div className="space-y-2.5">
              {results.map((r, i) => (
                <div key={r.title} className="flex items-center gap-3">
                  <span className="text-lg w-7 text-center">{r.icon}</span>
                  <span className="text-sm text-slate-700 font-medium w-44 flex-shrink-0 truncate">{r.title}</span>
                  <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${r.fit}%`, background: r.color, transitionDelay: `${i * 80}ms` }}
                    />
                  </div>
                  <span className="text-sm font-bold w-12 text-right" style={{ color: r.color }}>{r.fit}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Retake */}
      <div className="mt-8 pt-6 border-t border-slate-200 flex justify-between items-center">
        <p className="text-slate-600 text-sm">Want different results? Retake with new answers.</p>
        <button className="btn-ghost" onClick={onRestart}>Retake Assessment</button>
      </div>
    </div>
  );
}
