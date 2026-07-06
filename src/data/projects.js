export const featuredProjects = [
  {
  id: "01",
  title: "MSME-360",
  subtitle: "Unified Enterprise Platform",
  type: "Group Project",
  problem: "Small businesses struggle with fragmented records, manual invoice processing, and disconnected business data across multiple systems.",
  myMove: "Built the AI Command Center with a RAG pipeline using Groq API, implemented OCR-based invoice ingestion, engineered strict multi-tenant data isolation, and integrated dual-sync persistence between MongoDB and Google Sheets.",
  outcome: "Delivered an AI-powered business automation platform that provides contextual insights from private business data while automatically synchronizing vendors, inventory, and invoices across MongoDB and Google Sheets.",
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
},
  {
  id: "02",
  title: "CineMatch",
  subtitle: "Semantic AI Movie Recommender",
  type: "Personal Project",
  problem: "Traditional movie recommenders rely on keyword matching, leading to shallow recommendations while large similarity matrices are difficult to deploy on cloud platforms due to memory and file-size constraints.",
  myMove: "Built a semantic recommendation engine using SentenceTransformers, engineered weighted feature embeddings for directors, cast, genres, and plot, compressed a 23M+ cell similarity matrix with BZ2 for cloud deployment, and implemented resilient OMDb poster fetching with 3-tier retry logic.",
  outcome: "Delivered accurate context-aware movie recommendations for 4,800+ films through a deployed Streamlit application with optimized storage, fast inference, and reliable real-time poster retrieval.",
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
  {
    id: "03",
    title: "Carbon Emission Tracking System",
    subtitle: "Blockchain + ML for industrial emissions",
    type: "Group Project",
    problem: "Industrial emissions are self-reported, uneven, and hard to audit at scale.",
    myMove: "Emission prediction model + trend-forecasting layer for risk analysis.",
    outcome: "A transparent, blockchain-backed platform to monitor and reduce industrial CO₂.",
    stack: ["React.js", "Next.js", "Node.js", "Cosmos DB", "Blockchain", "ML"],
    liveUrl: null,
    githubUrl: "https://github.com/PCCOE-Carbon-Footprint"
  },
  {
    id: "04",
    title: "TFT Glucose Forecasting",
    subtitle: "Temporal Fusion Transformer · OhioT1DM",
    type: "Research",
    isInProgress: true,
    problem: "Type-1 diabetes glucose curves are patient-specific — global models flatten personal behaviour.",
    myMove: "Global model vs. per-patient fine-tuning study on OhioT1DM.",
    outcome: "Measuring where personalization actually pays off in glycemic forecasts.",
    stack: ["Python", "PyTorch", "Temporal Fusion Transformer", "OhioT1DM"],
    liveUrl: null,
    githubUrl: null
  }
];

export const secondaryProjects = [
  {
  id: "05",
  title: "LogiBrain",
  subtitle: "Supply Chain Optimization System",
  type: "Group Project",
  description: "A web-based supply chain optimization platform that combines EOQ, Reorder Point (ROP), and Dijkstra's algorithm to optimize inventory, transportation, and overall logistics costs. Contributed backend APIs and server-side business logic.",
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
  id: "06",
  title: "Orange",
  subtitle: "Accessible Language Learning Web App",
  type: "Personal Project",
  description: "A login-free language learning platform featuring interactive exercises, instant feedback, XP & hearts gamification, and full accessibility support for an engaging learning experience.",
  stack: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Accessibility (WCAG)"
  ],
  liveUrl: "https://starlit-palmier-fbc80f.netlify.app/",
  githubUrl: "https://github.com/gargijoshi9/orange-"
},
  {
  id: "07",
  title: "Next-Gen Personal Loan AI Platform",
  subtitle: "Agentic AI for Loan Origination",
  type: "Private Repository",
  isPrivate: true,
  description: "An AI-powered conversational loan origination platform that automates eligibility assessment, KYC verification, personalized loan negotiation, and real-time sanction decisions through an intelligent multi-agent workflow.",
  stack: [
    "React",
    "TypeScript",
    "Python",
    "Flask",
    "SQLite",
    "Gemini API",
    "spaCy"
  ],
  liveUrl: null,
  githubUrl: null
}
  // {
  //   id: "08",
  //   title: "AI-Powered Plagiarism & Authentication Detector",
  //   subtitle: "Details coming soon",
  //   type: "Project",
  //   description: "// TODO: details forthcoming",
  //   stack: [],
  //   liveUrl: null,
  //   githubUrl: null
  // }
];
