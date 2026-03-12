import { useState, useEffect } from "react";
import ProgressBar from "./components/ProgressBar";
import RegisterScreen from "./components/RegisterScreen";
import LikertScreen from "./components/LikertScreen";
import AcademicsScreen from "./components/AcademicsScreen";
import ResultsDashboard from "./components/ResultsDashboard";
import { INTEREST_QUESTIONS, PERSONALITY_QUESTIONS, computeResults } from "./data/assessmentData";

const STEPS = ["register", "interests", "personality", "academics", "results"];

export default function App() {
  const [step, setStep] = useState("register");
  const [profile, setProfile] = useState(null);
  const [answers, setAnswers] = useState({});
  const [subjectScores, setSubjectScores] = useState({});
  const [results, setResults] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  const handleAnswer = (id, val) => setAnswers(prev => ({ ...prev, [id]: val }));
  const handleSubject = (id, val) => setSubjectScores(prev => ({ ...prev, [id]: val }));

  const handleFinish = () => {
    const computed = computeResults(answers, subjectScores);
    setResults(computed);
    setStep("results");
  };

  const handleRestart = () => {
    setStep("register");
    setProfile(null);
    setAnswers({});
    setSubjectScores({});
    setResults([]);
  };

  const showProgress = step !== "register" && step !== "results";

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500">
              Mailing Data Solutions
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-slate-900 mb-2 leading-tight flex items-center justify-center gap-3">
            <img src="/logo.png" alt="Logo" className="w-12 h-12 md:w-16 md:h-16 rounded-xl shadow-sm" />
            <span>Career <span className="text-gradient">Assessment</span></span>
          </h1>
          <p className="text-slate-500 text-sm max-w-xs mx-auto">
            A psychometric assessment to discover your ideal career path.
          </p>
        </header>

        {showProgress && <ProgressBar step={step} />}

        {step === "register" && (
          <RegisterScreen
            onNext={data => { setProfile(data); setStep("interests"); }}
          />
        )}

        {step === "interests" && (
          <LikertScreen
            stepLabel="Step 2 of 4"
            title="Interests & Passions"
            subtitle="Rate how strongly each statement reflects your interests (1 = Strongly Disagree, 5 = Strongly Agree)."
            questions={INTEREST_QUESTIONS}
            answers={answers}
            onChange={handleAnswer}
            onNext={() => setStep("personality")}
            onBack={() => setStep("register")}
          />
        )}

        {step === "personality" && (
          <LikertScreen
            stepLabel="Step 3 of 4"
            title="Personality Traits"
            subtitle="Be honest — there are no right or wrong answers. Your personality is your superpower."
            questions={PERSONALITY_QUESTIONS}
            answers={answers}
            onChange={handleAnswer}
            onNext={() => setStep("academics")}
            onBack={() => setStep("interests")}
          />
        )}

        {step === "academics" && (
          <AcademicsScreen
            scores={subjectScores}
            onChange={handleSubject}
            onNext={handleFinish}
            onBack={() => setStep("personality")}
          />
        )}

        {step === "results" && (
          <ResultsDashboard
            profile={profile}
            results={results}
            answers={answers}
            onRestart={handleRestart}
          />
        )}

        {/* Footer */}
        <footer className="mt-12 text-center text-slate-700 text-xs">
          Career Assessment · Psychometric Assessment Platform
        </footer>
      </div>
    </div>
  );
}
