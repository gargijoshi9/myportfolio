export const featuredProjects = [
  {
    id: "01",
    title: "Nexus Ops",
    subtitle: "Multi-Tenant Enterprise Portal",
    type: "Enterprise System",
    problem:
      "Enterprise systems face tenant data leakage risks (BOLA) and lack unified access control across distributed teams.",
    myMove:
      "Engineered 25+ APIs with 5-role RBAC, tenant-scoped controls, secure invitations, and Redis-backed device session revocation.",
    outcome:
      "Zero cross-tenant data leaks, append-only audit logging, and 10 automated test suites with 172 assertions.",
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Redis",
      "NextAuth"
    ],
    liveUrl: "https://unified-workspace.vercel.app/",
    githubUrl: "https://github.com/gargijoshi9"
  },
  {
    id: "02",
    title: "MuleRadar",
    subtitle: "AI Mule Detection Platform",
    type: "Group Project",
    badge: "BOI 2026 · Phase II Finalist, Top 31 Nationwide",
    problem:
      "Money mule fraud hides in legitimate-looking transactions, with fraud rates as low as 0.89%.",
    myMove:
      "Built an ensemble model (XGBoost, LightGBM, CatBoost, Isolation Forest) with GNNs for fraud rings and LSTMs for transaction sequences.",
    outcome:
      "Achieved 0.9802 ROC-AUC and 0.7966 PR-AUC with SHAP explanations and human-in-the-loop audit trails.",
    stack: [
      "Python",
      "FastAPI",
      "React",
      "XGBoost",
      "LightGBM",
      "CatBoost",
      "SHAP",
      "Isolation Forest"
    ],
    liveUrl: null,
    githubUrl: "https://github.com/gargijoshi9/BOI"
  },
  {
    id: "03",
    title: "QuantumLab",
    subtitle: "Quantum Learning Platform (SIH 2026)",
    type: "EdTech / Quantum Computing",
    problem:
      "Abstract quantum concepts (qubits, superposition, gates) are difficult to grasp without interactive feedback and rigorous verification.",
    myMove:
      "Built a full-stack platform with Qiskit Aer simulation (up to 8 qubits), Three.js Bloch Sphere & Q-Sphere visualizers, and an AI tutor with circuit verification.",
    outcome:
      "Interactive 128–8192 shot sampling, IRT + BKT adaptive assessment engine, and verified circuit facts prior to LLM responses.",
    stack: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "Qiskit",
      "LLM",
      "Three.js"
    ],
    liveUrl: "https://corkscrew-sih-26.vercel.app/",
    githubUrl: "https://github.com/gargijoshi9"
  },
  {
    id: "04",
    title: "MSME-360",
    subtitle: "Unified Enterprise Platform",
    type: "Group Project",
    problem:
      "Small businesses juggle invoices, vendors, and inventory across disconnected systems.",
    myMove:
      "Built an AI-powered RAG assistant, OCR invoice pipeline, and Google Sheets ↔ MongoDB sync.",
    outcome:
      "Automated invoice processing with contextual business insights from private data.",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Groq API",
      "Tesseract.js",
      "Google Sheets API",
      "Tailwind CSS"
    ],
    liveUrl: "https://pbl-project-7.onrender.com/",
    githubUrl: "https://github.com/reva-32/pbl_project"
  }
];

export const secondaryProjects = [
  {
    id: "05",
    title: "CineMatch",
    subtitle: "Semantic AI Movie Recommender",
    type: "Personal Project",
    description:
      "Built a semantic recommender with SentenceTransformers compressing a 23M+ cell matrix via BZ2, delivering fast, context-aware recommendations for 4,800+ movies.",
    stack: [
      "Python",
      "SentenceTransformers",
      "Scikit-learn",
      "Pandas",
      "Streamlit",
      "OMDb API"
    ],
    liveUrl: "https://netfilx-movies-recommender.streamlit.app/",
    githubUrl: "https://github.com/gargijoshi9/netflix-recommender"
  },
  // {
  //   id: "04",
  //   title: "TFT Glucose Forecasting",
  //   subtitle: "Temporal Fusion Transformer · OhioT1DM",
  //   type: "Research",
  //   isInProgress: true,
  //   problem:
  //     "Type-1 diabetes glucose curves are patient-specific — global models flatten personal behaviour.",
  //   myMove:
  //     "Global model vs. per-patient fine-tuning study on OhioT1DM.",
  //   outcome:
  //     "Measuring where personalization actually pays off in glycemic forecasts.",
  //   stack: ["Python", "PyTorch", "Temporal Fusion Transformer", "OhioT1DM"],
  //   liveUrl: null,
  //   githubUrl: null
  // }


  // {
  //   id: "05",
  //   title: "Personal Loan AI Platform",
  //   subtitle: "Agentic AI for Loan Origination",
  //   type: "Group Project",
  //   isPrivate: true,
  //   description:
  //     "An AI-powered conversational loan origination platform that automates eligibility assessment, KYC verification, personalized loan negotiation, and real-time sanction decisions through an intelligent multi-agent workflow.",
  //   stack: [
  //     "React",
  //     "TypeScript",
  //     "Python",
  //     "Flask",
  //     "SQLite",
  //     "Gemini API",
  //     "spaCy"
  //   ],
  //   liveUrl: null,
  //   githubUrl: null
  // },
  {
    id: "06",
    title: "Carbon Emission Tracking System",
    subtitle: "Blockchain + ML for industrial emissions",
    type: "Group Project",
    description:
      "Industrial emissions are self-reported, uneven, and hard to audit at scale. Built an emission prediction model with a trend-forecasting layer for risk analysis, forming a transparent, blockchain-backed platform to monitor and reduce industrial CO₂.",
    stack: ["React.js", "Next.js", "Node.js", "Cosmos DB", "Blockchain", "ML"],
    liveUrl: null,
    githubUrl: "https://github.com/PCCOE-Carbon-Footprint"
  },
  {
    id: "07",
    title: "LogiBrain",
    subtitle: "Supply Chain Optimization System",
    type: "Group Project",
    description:
      "A web-based supply chain optimization platform that combines EOQ, Reorder Point (ROP), and Dijkstra's algorithm to optimize inventory, transportation, and overall logistics costs. Contributed backend APIs and server-side business logic.",
    stack: [
      "Python",
      "Flask",
      "SQLite",
      "EOQ",
      "ROP",
      "Dijkstra's Algorithm"
    ],
    liveUrl: null,
    githubUrl: "https://github.com/nudaadeshmukh/LogiBrain"
  },
  {
    id: "08",
    title: "Orange",
    subtitle: "Accessible Language Learning Web App",
    type: "Personal Project",
    description:
      "Award-winning login-free language learning platform (1st Place, IEEE TechRush 2025) featuring interactive exercises, instant feedback, XP & hearts gamification, and WCAG accessibility support.",
    stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Accessibility (WCAG)"
    ],
    liveUrl: "https://starlit-palmier-fbc80f.netlify.app/",
    githubUrl: "https://github.com/gargijoshi9/orange-"
  }
];