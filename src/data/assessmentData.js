export const INTEREST_QUESTIONS = [
  { id: "i1", text: "I enjoy solving complex puzzles or logical problems.", trait: "analytical" },
  { id: "i2", text: "I like drawing, painting, designing, or any creative expression.", trait: "creative" },
  { id: "i3", text: "I enjoy helping, guiding, or teaching other people.", trait: "social" },
  { id: "i4", text: "I like working with machines, tools, or technology.", trait: "technical" },
  { id: "i5", text: "I enjoy reading, writing, or telling stories.", trait: "literary" },
  { id: "i6", text: "I like leading teams or organizing events.", trait: "leadership" },
  { id: "i7", text: "I enjoy science experiments, research, or discovering how things work.", trait: "scientific" },
  { id: "i8", text: "I like working with numbers, spreadsheets, or financial data.", trait: "quantitative" },
];

export const PERSONALITY_QUESTIONS = [
  { id: "p1", text: "I prefer working independently rather than in large groups.", trait: "introverted" },
  { id: "p2", text: "I like taking risks and exploring new, uncharted territories.", trait: "adventurous" },
  { id: "p3", text: "I am very detail-oriented and prefer organized environments.", trait: "conscientious" },
  { id: "p4", text: "I find energy in meeting new people and social situations.", trait: "extroverted" },
  { id: "p5", text: "I remain calm under pressure and handle stress effectively.", trait: "resilient" },
  { id: "p6", text: "I approach problems with imagination and unconventional thinking.", trait: "openness" },
];

export const SUBJECTS = [
  { id: "s_math", label: "Mathematics", cluster: "quantitative", icon: "📐" },
  { id: "s_physics", label: "Physics", cluster: "scientific", icon: "⚛️" },
  { id: "s_chem", label: "Chemistry", cluster: "scientific", icon: "🧪" },
  { id: "s_bio", label: "Biology", cluster: "scientific", icon: "🧬" },
  { id: "s_english", label: "English / Literature", cluster: "literary", icon: "📖" },
  { id: "s_cs", label: "Computer Science", cluster: "technical", icon: "💻" },
  { id: "s_social", label: "Social Studies / History", cluster: "social", icon: "🌍" },
  { id: "s_art", label: "Arts / Craft / Design", cluster: "creative", icon: "🎨" },
  { id: "s_commerce", label: "Commerce / Economics", cluster: "quantitative", icon: "📊" },
];

export const SUBJECTS_10TH = [
  { id: "m_math", label: "Mathematics", cluster: "quantitative", icon: "📐" },
  { id: "m_sci", label: "Science", cluster: "scientific", icon: "⚛️" },
  { id: "m_soc", label: "Social Studies", cluster: "social", icon: "🌍" },
  { id: "m_eng", label: "English", cluster: "literary", icon: "📖" },
  { id: "m_hin", label: "Hindi", cluster: "literary", icon: "📝" },
  { id: "m_lang", label: "Kannada / Sanskrit", cluster: "literary", icon: "🏛️" },
];

export const STREAMS_11TH = [
  { id: "pcmb", label: "Science (PCMB)", desc: "Physics, Chem, Math, Biology" },
  { id: "pcmc", label: "Science (PCMC)", desc: "Physics, Chem, Math, Comp Sci" },
  { id: "pce",  label: "Science (PCME)", desc: "Physics, Chem, Math, Electronics" },
  { id: "comm", label: "Commerce", desc: "Accounts, Business, Econ" },
  { id: "arts", label: "Arts / Humanities", desc: "History, Psych, Soc" },
];

export const CAREER_MAP = [
  {
    title: "Software Engineer",
    icon: "💻",
    color: "#6366f1",
    domain: "Technology",
    clusters: ["technical", "quantitative", "analytical"],
    stream: "Science (PCM) / Computer Science",
    outlook: "High (25% growth expected)",
    industry: "Tech, Finance, Healthcare, Auto",
    whyMatch: "Your strong analytical mindset, interest in technology, and numerical aptitude align perfectly with software engineering.",
    degrees: ["B.Tech CSE", "BCA", "B.Sc. Computer Science", "MCA"],
    skills: ["Programming (Python/Java)", "Data Structures", "Problem Solving", "System Design", "Teamwork"],
    backup: ["Data Analyst", "IT Consultant", "DevOps Engineer"],
    plan: [
      { year: "Year 1", action: "Learn Python & JavaScript basics. Complete CS50 or similar." },
      { year: "Year 2", action: "Build 3–5 projects. Learn HTML/CSS, databases, Git." },
      { year: "Year 3", action: "Land a software internship. Contribute to open source." },
      { year: "Year 4", action: "Specialize: AI/ML, Web, Mobile, or Cloud." },
      { year: "Year 5", action: "Full-time SWE role at a product company or launch a startup." },
    ],
  },
  {
    title: "Doctor / Medical Professional",
    icon: "🩺",
    color: "#10b981",
    domain: "Healthcare",
    clusters: ["scientific", "social", "resilient"],
    stream: "Science (PCB)",
    outlook: "Stable (High demand globally)",
    industry: "Hospitals, Research, Public Health",
    whyMatch: "Your empathy, scientific curiosity, and resilience under pressure are the hallmarks of an excellent medical professional.",
    degrees: ["MBBS", "BDS", "B.Pharm", "BAMS", "BHMS"],
    skills: ["Biology & Chemistry", "Clinical Reasoning", "Empathy", "Communication", "Decision Making"],
    backup: ["Pharmacist", "Medical Researcher", "Healthcare Administrator"],
    plan: [
      { year: "Year 1", action: "Deep focus on Biology, Chemistry — target NEET." },
      { year: "Year 2", action: "Join NEET coaching. Solve 5,000+ MCQs with mock tests." },
      { year: "Year 3", action: "Clear NEET. Secure MBBS/BDS seat at a reputed college." },
      { year: "Year 4", action: "Complete clinical rotations. Decide on specialisation." },
      { year: "Year 5", action: "PG entrance prep (NEET-PG) or internship completion." },
    ],
  },
  {
    title: "Graphic / UX Designer",
    icon: "🎨",
    color: "#f43f5e",
    domain: "Creative",
    clusters: ["creative", "technical", "openness"],
    stream: "Arts / Fine Arts / Design",
    outlook: "Growing (Rise of digital products)",
    industry: "Tech, Media, E-commerce, Gaming",
    whyMatch: "Your creative flair, open-minded thinking, and interest in technology make you a natural fit for design roles.",
    degrees: ["B.Des", "BFA", "B.Sc. Multimedia", "Diploma in UI/UX", "NID / NiFT"],
    skills: ["Figma / Adobe Suite", "Typography", "User Research", "Prototyping", "Visual Communication"],
    backup: ["Motion Designer", "Art Director", "Brand Strategist"],
    plan: [
      { year: "Year 1", action: "Learn Figma, Adobe Illustrator. Follow design accounts." },
      { year: "Year 2", action: "Build a 10-piece portfolio. Do logo & app redesign challenges." },
      { year: "Year 3", action: "Freelance projects. Intern at a design agency or startup." },
      { year: "Year 4", action: "Specialize: UX Research, Motion, or Brand Identity." },
      { year: "Year 5", action: "Senior Designer at a studio or in-house design team." },
    ],
  },
  {
    title: "Chartered Accountant / Finance",
    icon: "📊",
    color: "#f59e0b",
    domain: "Business",
    clusters: ["quantitative", "conscientious", "analytical"],
    stream: "Commerce (with Mathematics)",
    outlook: "High (Crucial for all businesses)",
    industry: "Audit, FinTech, Banking, Consulting",
    whyMatch: "Your precision, numerical fluency, and conscientiousness are exactly what finance and accounting demand.",
    degrees: ["B.Com", "BBA Finance", "CA Program (ICAI)", "CFA", "MBA Finance"],
    skills: ["Accounting & Taxation", "MS Excel & Tally", "Financial Modelling", "Attention to Detail", "Regulatory Knowledge"],
    backup: ["Investment Banker", "Auditor", "Financial Planner"],
    plan: [
      { year: "Year 1", action: "Study Commerce + register for CA Foundation (ICAI)." },
      { year: "Year 2", action: "Clear CA Foundation. Begin CA Intermediate prep." },
      { year: "Year 3", action: "Clear CA Intermediate. Start 3-year articleship." },
      { year: "Year 4", action: "Articleship + CA Final preparation." },
      { year: "Year 5", action: "Clear CA Final. Join Big 4 or corporate finance." },
    ],
  },
  {
    title: "Teacher / Educator",
    icon: "📚",
    color: "#8b5cf6",
    domain: "Education",
    clusters: ["social", "literary", "leadership"],
    stream: "Arts / Humanities / Any Stream",
    outlook: "Steady (Transforming via EdTech)",
    industry: "Schools, EdTech, Universities",
    whyMatch: "Your love for people, communication skills, and leadership abilities make you an inspiring educator.",
    degrees: ["B.Ed", "BA + B.Ed", "M.Ed", "Diploma in Education", "B.El.Ed"],
    skills: ["Subject Expertise", "Communication", "Lesson Planning", "Empathy", "Classroom Management"],
    backup: ["Academic Counsellor", "EdTech Content Creator", "Corporate Trainer"],
    plan: [
      { year: "Year 1", action: "Choose preferred subject. Start part-time tutoring." },
      { year: "Year 2", action: "Volunteer at schools. Understand pedagogy basics." },
      { year: "Year 3", action: "Pursue B.Ed degree or relevant certification." },
      { year: "Year 4", action: "Clear CTET / State TET exam." },
      { year: "Year 5", action: "Government school, private institution, or EdTech role." },
    ],
  },
  {
    title: "Journalist / Content Creator",
    icon: "✍️",
    color: "#06b6d4",
    domain: "Creative",
    clusters: ["literary", "adventurous", "social"],
    stream: "Arts / Mass Communication / Journalism",
    outlook: "High (Content-driven economy)",
    industry: "Digital Media, TV, News, PR",
    whyMatch: "Your storytelling instinct, curiosity about the world, and social nature are perfect for media and content creation.",
    degrees: ["BA Journalism", "BMM", "B.Sc. Media Studies", "MA Mass Communication"],
    skills: ["Writing & Editing", "Research", "Interviewing", "Social Media", "SEO Basics"],
    backup: ["Copywriter", "PR Specialist", "Podcast Host"],
    plan: [
      { year: "Year 1", action: "Start a blog or YouTube channel. Write 50+ articles." },
      { year: "Year 2", action: "Intern at a newspaper, magazine, or digital media house." },
      { year: "Year 3", action: "Publish a portfolio of 20+ verified bylines." },
      { year: "Year 4", action: "Specialize: Investigative, Digital, TV, or Documentary." },
      { year: "Year 5", action: "Staff journalist, editor, or full-time content creator." },
    ],
  },
  {
    title: "Entrepreneur / Business Leader",
    icon: "🚀",
    color: "#f97316",
    domain: "Business",
    clusters: ["leadership", "adventurous", "quantitative"],
    stream: "Commerce / BBA / Any Stream",
    outlook: "Very High (Startup ecosystem growth)",
    industry: "Venture Capital, Startups, Multi-corp",
    whyMatch: "Your bold thinking, love for challenges, and natural leadership instincts are the seeds of a great entrepreneur.",
    degrees: ["BBA", "B.Com + MBA", "MBA (IIM)", "B.Tech + MBA"],
    skills: ["Business Strategy", "Financial Literacy", "Networking", "Risk Management", "Negotiation"],
    backup: ["Marketing Manager", "Business Consultant", "Product Manager"],
    plan: [
      { year: "Year 1", action: "Read 12 business books. Study successful founders." },
      { year: "Year 2", action: "Launch a micro-business or side hustle." },
      { year: "Year 3", action: "Intern at a startup. Learn operations & sales." },
      { year: "Year 4", action: "MBA (optional) or accelerator / incubator program." },
      { year: "Year 5", action: "Scale your venture or take a leadership track at a company." },
    ],
  },
  {
    title: "Data Scientist / AI Engineer",
    icon: "🤖",
    color: "#3b82f6",
    domain: "Technology",
    clusters: ["quantitative", "analytical", "technical"],
    stream: "Science (PCM) / Statistics / Computer Science",
    outlook: "Very High (AI Revolution)",
    industry: "Tech, Retail, Insurance, Research",
    whyMatch: "Your exceptional analytical mind, love for numbers, and technical curiosity put you on the frontier of AI and data science.",
    degrees: ["B.Tech CSE/AI", "B.Sc. Statistics", "B.Sc. Data Science", "M.Sc. AI/ML"],
    skills: ["Python & R", "Statistics & Probability", "Machine Learning", "SQL & Big Data", "Data Visualization"],
    backup: ["Business Analyst", "Research Scientist", "Quantitative Analyst"],
    plan: [
      { year: "Year 1", action: "Master Python, NumPy, Pandas, and basic statistics." },
      { year: "Year 2", action: "Complete ML courses (Coursera/fast.ai). Join Kaggle." },
      { year: "Year 3", action: "3–5 end-to-end ML projects. Land a data internship." },
      { year: "Year 4", action: "Specialize: NLP, Computer Vision, or MLOps." },
      { year: "Year 5", action: "Data Scientist role at a tech company, startup, or research lab." },
    ],
  },
];

export function computeResults(answers, subjectScores, profile) {
  const traitScores = {};

  [...INTEREST_QUESTIONS, ...PERSONALITY_QUESTIONS].forEach((q) => {
    const val = answers[q.id] ?? 3;
    traitScores[q.trait] = (traitScores[q.trait] || 0) + val;
  });

  let academicProfile = null;

  if (profile?.grade === "10th") {
    const subjects = SUBJECTS_10TH;
    let totalMarks = 0;
    
    subjects.forEach(s => {
      const marks = subjectScores[s.id] ?? 0;
      totalMarks += marks;
      const boost = marks >= 85 ? 4 : marks >= 70 ? 3 : marks >= 50 ? 2 : marks >= 35 ? 1 : 0;
      traitScores[s.cluster] = (traitScores[s.cluster] || 0) + boost;
    });

    const percentage = Number(((totalMarks / 600) * 100).toFixed(1)); // 6 subjects * 100
    let classResult = "Pass";
    if (percentage >= 75) classResult = "Distinction";
    else if (percentage >= 60) classResult = "First Class";
    else if (percentage >= 50) classResult = "Second Class";
    else if (percentage < 35) classResult = "Fail";

    academicProfile = {
      total: totalMarks,
      totalPossible: 600,
      percentage,
      classResult,
      preferredStream: subjectScores.preferredStream || "Not Selected"
    };
  } else {
    SUBJECTS.forEach((s) => {
      const grade = subjectScores[s.id] ?? 0;
      const boost = grade >= 85 ? 4 : grade >= 70 ? 3 : grade >= 55 ? 2 : grade >= 40 ? 1 : 0;
      traitScores[s.cluster] = (traitScores[s.cluster] || 0) + boost;
    });
  }

  // Compute confidence score
  let conflictPoints = 0;
  const subjectsToTest = profile?.grade === "10th" ? SUBJECTS_10TH : SUBJECTS;
  subjectsToTest.forEach(s => {
    const gradeVal = subjectScores[s.id] ?? 0;
    const traitVal = (traitScores[s.cluster] || 15) / 5;
    if (gradeVal > 85 && traitVal < 2) conflictPoints += 1;
    if (gradeVal < 40 && traitVal > 4) conflictPoints += 1;
  });
  const confidence = Math.max(65, 98 - (conflictPoints * 8));

  // 10th Grade Stream Recommendation Logic
  if (profile?.grade === "10th" && academicProfile) {
    const m = subjectScores;
    const t = traitScores;
    
    const sciScore = ((m.m_math || 0) + (m.m_sci || 0)) / 2;
    const commScore = ((m.m_math || 0) + (m.m_soc || 0)) / 2;
    const artsScore = ((m.m_soc || 0) + (m.m_eng || 0)) / 2;

    let rec = { stream: "Arts & Humanities", reason: "Strong verbal and social orientation." };

    if (sciScore >= 70 || (t.scientific > 15 && t.analytical > 15)) {
      if (t.scientific > (t.technical || 0) + 2) {
        rec = { stream: "Science (PCMB)", reason: "Strong pull towards Biology and Life Sciences." };
      } else if (t.technical > (t.scientific || 0)) {
        rec = { stream: "Science (PCMC)", reason: "Exceptional technical and computational logic." };
      } else {
        rec = { stream: "Science (PCME)", reason: "Balanced analytical and electronic interest." };
      }
    } else if (commScore >= 60 && t.quantitative > 12) {
      rec = { stream: "Commerce", reason: "High numerical aptitude and business interest." };
    }

    academicProfile.recommendedStream = rec.stream;
    academicProfile.recommendationReason = rec.reason;
  }

  const scored = CAREER_MAP.map((career) => {
    const total = career.clusters.reduce((sum, c) => sum + (traitScores[c] || 0), 0);
    const maxPossible = career.clusters.length * 10; // Normalized factor
    const raw = (total / maxPossible) * 10;
    const fit = Math.min(97, Math.max(30, Math.round(raw * 5.5 + 20)));

    // Explain match based on highest contributing traits
    const matchLogic = career.clusters
      .filter(c => (traitScores[c] || 0) > 4)
      .map(c => c.charAt(0).toUpperCase() + c.slice(1))
      .slice(0, 2)
      .join(" & ");

    return { ...career, fit, traitScores, matchLogic };
  });

  const sortedResults = scored.sort((a, b) => b.fit - a.fit);

  // Aggregate Domain (Cluster) Scores for higher-level guidance
  const domains = [...new Set(CAREER_MAP.map(c => c.domain))];
  const domainResults = domains.map(d => {
    const careersInDomain = sortedResults.filter(c => c.domain === d);
    const avgFit = careersInDomain.reduce((sum, c) => sum + c.fit, 0) / careersInDomain.length;
    return { name: d, fit: Math.round(avgFit) };
  }).sort((a, b) => b.fit - a.fit);

  return {
    careers: sortedResults,
    domains: domainResults,
    confidence,
    academicProfile
  };
}

export function getTraitProfile(answers) {
  const traitScores = {};
  [...INTEREST_QUESTIONS, ...PERSONALITY_QUESTIONS].forEach((q) => {
    const val = answers[q.id] ?? 3;
    traitScores[q.trait] = (traitScores[q.trait] || 0) + val;
  });
  return traitScores;
}
