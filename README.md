# 🧭 Career Compass — Psychometric Assessment App

A full-stack-ready frontend career assessment application built with:

- **React 18** (Vite)
- **Tailwind CSS**
- **Chart.js** + react-chartjs-2

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production
```bash
npm run build
```

---

## 📁 Project Structure

```
career-compass/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx               # Entry point
    ├── App.jsx                # Root component + routing logic
    ├── index.css              # Tailwind + global styles
    ├── data/
    │   └── assessmentData.js  # Questions, career map, scoring engine
    └── components/
        ├── ProgressBar.jsx    # Step indicator
        ├── RegisterScreen.jsx # Student profile form
        ├── LikertScreen.jsx   # Reusable Likert-scale question screen
        ├── AcademicsScreen.jsx# Subject score input
        └── ResultsDashboard.jsx # Charts + career results
```

---

## 🧠 Assessment Flow

| Step | Screen | Purpose |
|------|--------|---------|
| 1 | Register | Capture student profile |
| 2 | Interests | 8 Likert questions → interest traits |
| 3 | Personality | 6 Likert questions → personality traits |
| 4 | Academics | Subject scores (0–100) → academic strengths |
| 5 | Results | Dashboard with charts + career roadmaps |

---

## 📊 Charts Used (Chart.js)

| Chart | Data |
|-------|------|
| **Bar Chart** | Top 5 career fit % comparison |
| **Radar Chart** | 8-dimension trait profile |
| **Doughnut Chart** | Recommended stream distribution |
| **Progress Bars** | All 8 career scores |

---

## 🎯 Careers Covered

1. 💻 Software Engineer
2. 🩺 Doctor / Medical Professional
3. 🎨 Graphic / UX Designer
4. 📊 Chartered Accountant / Finance
5. 📚 Teacher / Educator
6. ✍️ Journalist / Content Creator
7. 🚀 Entrepreneur / Business Leader
8. 🤖 Data Scientist / AI Engineer

Each career includes: Fit %, Why it matches, Stream recommendation, Degree options, Skills to build, Backup careers, and a 5-Year Action Plan.
