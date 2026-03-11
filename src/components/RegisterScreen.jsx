import { useState } from "react";

export default function RegisterScreen({ onNext }) {
  const [form, setForm] = useState({ name: "", age: "", grade: "", city: "" });
  const valid = form.name.trim() && form.age && form.grade.trim();

  const fields = [
    { key: "name",  label: "Full Name",           placeholder: "e.g. Sahana Sharma",  type: "text",   required: true },
    { key: "age",   label: "Age",                  placeholder: "e.g. 16",             type: "number", required: true },
    { key: "grade", label: "Current Grade / Class",placeholder: "e.g. 10th or 11th",  type: "text",   required: true },
    { key: "city",  label: "City",                 placeholder: "e.g. Bengaluru",      type: "text",   required: false },
  ];

  return (
    <div className="animate-fade-up">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          <span className="text-indigo-400 text-xs font-semibold tracking-widest uppercase">Step 1 of 4</span>
        </div>
        <h2 className="font-display text-3xl text-slate-900 mb-2">Create Your Profile</h2>
        <p className="text-slate-500 text-sm">We'll personalise your assessment based on your background.</p>
      </div>

      <div className="card p-8 max-w-lg mx-auto">
        <div className="space-y-5">
          {fields.map(({ key, label, placeholder, type, required }) => (
            <div key={key}>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                {label} {required && <span className="text-rose-500">*</span>}
              </label>
              <input
                type={type}
                placeholder={placeholder}
                value={form[key]}
                onChange={e => setForm({ ...form, [key]: e.target.value })}
                className="input-field"
              />
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <button
            className="btn-primary"
            disabled={!valid}
            onClick={() => valid && onNext(form)}
          >
            Begin Assessment
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
