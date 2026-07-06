export const featuredProjects = [
  {
    id: "01",
    title: "MSME-360",
    subtitle: "AI-Powered Business Automation SaaS",
    type: "Group Project",
    problem: "Small businesses drown in unstructured receipts, invoices, and context-free data.",
    myMove: "Built the RAG assistant and the OCR → LLM → structured-data pipeline.",
    outcome: "Contextual insights on top of a business's own data + automated invoice ingestion.",
    stack: ["React", "TypeScript", "Node.js", "MongoDB", "Groq API", "Express.js"],
    liveUrl: null,
    githubUrl: null
  },
  {
    id: "02",
    title: "CineMatch",
    subtitle: "AI Movie Recommendation System",
    type: "Personal Project",
    problem: "Existing recommenders reduce films to tags; taste lives between the tags.",
    myMove: "Semantic engine over 4,800+ films — 5 metadata features → dense embeddings.",
    outcome: "Compressed a 23M+ cell similarity matrix via BZ2 for Streamlit Cloud + 3-tier retry logic for zero-downtime poster fetching.",
    stack: ["Python", "SentenceTransformers", "Scikit-learn", "Streamlit", "OMDb API"],
    liveUrl: null,
    githubUrl: null
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
    githubUrl: null
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
    subtitle: "Distribution Supply Management System",
    type: "Group Project",
    description: "Inventory optimization with EOQ & ROP across a multi-warehouse network; Dijkstra's for optimal routing.",
    stack: ["Python", "Flask", "SQLite", "Dijkstra's", "DSA"],
    liveUrl: null,
    githubUrl: null
  },
  {
    id: "06",
    title: "Orange",
    subtitle: "Details coming soon",
    type: "Project",
    description: "// TODO: details forthcoming",
    stack: [],
    liveUrl: null,
    githubUrl: null
  },
  {
    id: "07",
    title: "AI Loan Sales Chatbot",
    subtitle: "EY Techathon · Round 2",
    type: "Private Repository",
    isPrivate: true,
    description: "Multi-agent conversational AI automating personal loan workflows — eligibility, verification, approval.",
    stack: ["Python", "LLMs", "Multi-Agent"],
    liveUrl: null,
    githubUrl: null
  },
  {
    id: "08",
    title: "AI-Powered Plagiarism & Authentication Detector",
    subtitle: "Details coming soon",
    type: "Project",
    description: "// TODO: details forthcoming",
    stack: [],
    liveUrl: null,
    githubUrl: null
  }
];
