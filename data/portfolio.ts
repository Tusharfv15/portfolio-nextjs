export const personalInfo = {
  name: "Tushar Parsai",
  location: "Pune, Maharashtra",
  email: "parsaitushar@gmail.com",
  phone: "+91-8143195970",
  linkedin: "https://linkedin.com/in/tushar-parsai-76a292253", // TODO: add full LinkedIn URL
  github: "https://github.com/Tusharfv15",   // TODO: add full GitHub URL
  leetcode: "https://leetcode.com/u/___Tushar___/", // TODO: add full LeetCode URL
  resumeUrl: "https://drive.google.com/file/d/1SH_np60oLXsIeu5AsYqD5I_4lryWwJ3V/view", // TODO: add Google Drive resume link
  heroLabel: "AI Research Engineer",
  heroTagline:
    "Building at the intersection of AI research and production engineering. From multi-agent LLM systems to training and fine-tuning models for real-world use cases, I turn research into deployed, scalable software.",
};

export const education = {
  institution: "Indian Institute of Information Technology, Pune",
  shortName: "IIIT Pune",
  degree: "B.Tech in Computer Science",
  period: "2022 – 2026",
  cgpa: "8.18",
  location: "Pune, India",
};

export const skills: Record<string, string[]> = {
  "Core Languages": ["Python", "TypeScript", "JavaScript", "C", "C++", "SQL"],
  "AI / ML": ["PyTorch", "LangChain", "LangGraph", "Scikit-Learn", "Pandas", "NumPy"],
  "Frontend & Infra": ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL"],
};

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  logo: string;
  logoHeight: string;
  logoMargin: string;
}

export const experience: Experience[] = [
  {
    company: "Bosch Research",
    role: "NLP Intern",
    period: "July 2025 – December 2025",
    location: "Bengaluru, India",
    description:
      "Engineered a multi-agent orchestration system for semiconductor process analysis using LangGraph and fine-tuned Llama-3, achieving a 72% weighted execution score. Integrated PostgreSQL-backed persistent memory for stateful, resumable workflows with human-in-the-loop feedback.",
    logo: "/Bosch-logo.svg",
    logoHeight: "h-8",
    logoMargin: "mb-8",
  },
  {
    company: "Newtuple Technologies",
    role: "Generative AI Intern",
    period: "December 2024 – February 2025",
    location: "Pune, India",
    description:
      "Benchmarked Docling, Tabled, and MegaParse on proprietary PDFs via LLM-based data-inference pipelines, achieving a 25% boost in extraction accuracy. Researched LLM observability tools: Opik, Phoenix (Arize AI), and Langfuse.",
    logo: "/newtuple.png",
    logoHeight: "h-[80px]",
    logoMargin: "mb-2",
  },
];

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
  image: string;
  aspect: string;
  gridClass: string;
  speed: string;
}

export const projects: Project[] = [
 
  {
    title: "Financial Document Insights Engine",
    description: "Financial document insights engine powered by Docling OCR on Modal serverless GPUs. Features a Planner → Extractor → Router → Code Generator → Sandboxed Executor pipeline that accurately interprets complex financial PDFs with highly variable layouts, correlates information across multiple pages and sections, and performs precise financial reasoning to answer user queries. Includes a RAG mode with custom chunking and Pinecone retrieval for enhanced document understanding.",
    tags: ["Python", "Docling", "Streamlit", "Pinecone"],
    github: "https://github.com/Tusharfv15/financial-doc-analyzer",
    live: "#",
    image:'/finance.png',
    aspect: "aspect-[16/9]",
    gridClass: "col-span-12 md:col-span-7",
    speed: "0.05",
  },
  {
    title: "BRS: Business Reliability Score",
    description:
      "Four-stage pipeline that scores a small business using Google Maps signals, then uses an AI agent to detect review manipulation: (tools used by the agent - fake reviewer profiling, temporal spam bursts, and TF-IDF content similarity, custom tools that the agent can define and execute if needed). Produces a credit risk narrative with an embedded HTML report.",
    tags: ["Python", "OpenAI", "Scikit-Learn", "Pandas", "Google Places API"],
    github: "https://github.com/Tusharfv15/brs-scoring-pipeline-with-anomaly-detection",
    live: "#",
    image:
      "/brs-image.png",
    aspect: "aspect-[16/10]",
    gridClass: "col-span-12 md:col-span-5 md:col-start-8 md:mt-32",

    speed: "0.1",
  },
   {
    title: "ResNet Audio Classifier",
    description:
      "ResNet-based audio CNN trained from scratch in PyTorch achieving 83.75% accuracy on ESC-50 using Mixup, SpecAugment, AdamW, and OneCycleLR. Deployed via FastAPI on Modal serverless GPU (A10G) with a TypeScript dashboard for visualizing convolutional activations.",
    tags: ["PyTorch", "TypeScript", "FastAPI", "TensorBoard"],
    github: "https://github.com/Tusharfv15/resnet-audio-visualizer-frontend",
    live: "#",
    image: "/resnet.png",
    aspect: "aspect-[16/10]",
    gridClass: "col-span-12 md:col-span-7 md:col-start-3 md:mt-20",
    speed: "0.06",
  }
];

export const achievements: string[] = [
  "Solved over 700 algorithmic problems on LeetCode, GeeksforGeeks, and CodeStudio.",
  "Secured 98.8 percentile in JEE Mains 2022, ranking in the top 1.2% of over 1 million candidates.",
];
