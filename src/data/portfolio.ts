export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: "Systems" | "Machine Learning" | "Full-Stack";
  tags: string[];
  keyHighlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    description?: string;
  }[];
}

export interface ExperienceItem {
  period: string;
  title: string;
  organization: string;
  description: string;
  badges: string[];
  keyPoints?: string[];
}

export const portfolioData = {
  personal: {
    name: "Nithish",
    role: "Systems & Software Engineer | Cybersecurity",
    status: "Available for full-time roles & engineering projects",
    tagline: "Building high-performance CLI utilities in Rust, exploring low-level architectures in C with Raylib, and researching cybersecurity defense.",
    bio: [
      "I am a software engineer passionate about systems programming and low-level software craftsmanship. My primary focus is building high-throughput, concurrent CLI tools in Rust and researching cybersecurity defenses.",
      "As a low-level systems enthusiast, I explore C with Raylib as a hobby to understand memory layouts, graphics loops, and physics from first principles. I also completed a 5-month cybersecurity internship at the Internet Society of India focusing on network defense, threat modeling, and vulnerability assessments."
    ],
    location: "India",
    email: "nithismugen@gmail.com",
    github: "https://github.com/DS-Nithish",
    linkedin: "https://www.linkedin.com/in/nithish-r-b47754282/",
    twitter: "https://twitter.com",
    resumeUrl: "#resume",
  },
  highlights: [
    {
      metric: "Rust CLI",
      label: "Fast concurrent CLI utilities with zero-cost abstractions & Rayon",
    },
    {
      metric: "C & Raylib",
      label: "2D arcade game with deterministic physics & zero memory leaks",
    },
    {
      metric: "Cybersecurity",
      label: "Internship at Internet Society of India (Jan – May 2026)",
    },
    {
      metric: "Low-Level CS",
      label: "Data structures, memory allocation hygiene & clean systems design",
    },
  ],
  projects: [
    {
      id: "rust-cli-tool",
      title: "High-Performance CLI Tool in Rust",
      subtitle: "Fast, concurrent developer command-line utility built with Rust",
      description:
        "A lightning-fast terminal tool developed in Rust, engineered for high-throughput batch processing and instant startup time. Built leveraging Rust's zero-cost abstractions, robust type system, and thread-safe parallelism.",
      category: "Systems",
      tags: ["Rust", "Clap", "Tokio", "Rayon", "Cargo", "CLI UX"],
      keyHighlights: [
        "Architected multi-threaded worker pool utilizing Rayon for parallel execution across all CPU cores",
        "Zero-copy string slicing and memory pooling ensuring minimal allocations and instant responsiveness",
        "Intuitive developer CLI with colored progress spinners, custom verbosity levels, and shell autocompletions",
        "Benchmarked against standard utilities with a ~4.8x reduction in execution latency"
      ],
      githubUrl: "https://github.com/DS-Nithish",
      liveUrl: "#",
      featured: true,
    },
    {
      id: "c-raylib-game",
      title: "2D Arcade Game in C & Raylib",
      subtitle: "Low-level systems hobby project exploring physics, memory, and graphics loops in pure C",
      description:
        "An arcade 2D game built as a hobby project in pure C using the Raylib library to explore low-level concepts from first principles: fixed-timestep physics updates, smooth frame pacing, manual collision detection, and zero-leak memory management.",
      category: "Systems",
      tags: ["C (C99)", "Raylib", "Game Physics", "AABB Collision", "Audio & Sprites"],
      keyHighlights: [
        "Implemented deterministic fixed-timestep accumulator loop guaranteeing steady 60+ FPS physics across systems",
        "Leveraged Raylib's lightweight OpenGL renderer for sprite sheets, camera panning, and dynamic screen scaling",
        "Engineered 2D axis-aligned bounding box (AABB) collision detection with velocity response handling",
        "Strict manual memory management with zero runtime memory leaks (verified with Valgrind)"
      ],
      githubUrl: "https://github.com/DS-Nithish",
      liveUrl: "#",
      featured: true,
    },
    {
      id: "sih-ml-predictor",
      title: "MPLADS AI Risk & Outcome Predictor (SIH)",
      subtitle: "Machine learning solution for Smart India Hackathon problem statement",
      description:
        "A machine learning pipeline developed for the Smart India Hackathon to analyze real-world datasets and forecast outcome metrics. Focused on rigorous data preprocessing, feature engineering, and high-precision predictive modeling.",
      category: "Machine Learning",
      tags: ["Python", "Scikit-Learn", "XGBoost", "Pandas", "Feature Engineering", "FastAPI"],
      keyHighlights: [
        "Engineered end-to-end data pipeline cleaning and standardizing multi-modal hackathon datasets",
        "Extracted predictive feature sets and applied cross-validated gradient boosted trees (XGBoost)",
        "Achieved high cross-validation F1-score with robust resilience against noisy test data",
        "Wrapped model in a lightweight REST inference API with sub-40ms latency and SHAP explainability"
      ],
      githubUrl: "https://github.com/DS-Nithish/sih-mplads-ai-risk-detection",
      liveUrl: "#",
      featured: true,
    },
    {
      id: "fish-rain-weather",
      title: "FishRain Weather Application",
      subtitle: "Modern responsive weather platform built with TypeScript",
      description:
        "A sleek, responsive weather application providing real-time meteorological metrics, forecasts, and responsive UI components. Built with TypeScript and modern web standards.",
      category: "Full-Stack",
      tags: ["TypeScript", "React", "REST API", "Tailwind CSS", "UI/UX"],
      keyHighlights: [
        "Clean, responsive interface with instant search and meteorological metric visualizations",
        "Type-safe API integration with client-side caching to reduce redundant network queries",
        "Designed with dark/light visual modes and mobile-first responsive layout"
      ],
      githubUrl: "https://github.com/DS-Nithish/FishRain",
      liveUrl: "#",
      featured: false,
    },
  ] as Project[],
  experiences: [
    {
      period: "Jan 2026 – May 2026",
      title: "Cybersecurity Intern",
      organization: "Internet Society of India (ISOC)",
      description:
        "Completed a 5-month intensive cybersecurity internship focusing on digital infrastructure defense, vulnerability assessments, and network security protocols. Evaluated security postures and analyzed cryptography and privacy standards.",
      badges: ["Cybersecurity", "Network Security", "Vulnerability Assessment", "Cryptography", "Internet Society"],
      keyPoints: [
        "Conducted vulnerability assessments and threat modeling across networked applications and infrastructure",
        "Researched contemporary attack vectors, encryption standards, and digital identity defense mechanisms",
        "Collaborated on cybersecurity policy recommendations and institutional best-practice guidelines",
        "Audited network communications for insecure patterns and implemented hardening strategies"
      ],
    },
    {
      period: "Smart India Hackathon",
      title: "ML Developer & Team Contributor",
      organization: "Smart India Hackathon (SIH)",
      description:
        "Competed at the national Smart India Hackathon tackling a complex real-world governance and risk-detection problem statement. Spearheaded the machine learning data pipeline and model training within the 36-hour sprint.",
      badges: ["Machine Learning", "XGBoost", "Python", "Data Analysis", "National Hackathon"],
      keyPoints: [
        "Developed end-to-end outcome prediction pipeline under rigorous time constraints",
        "Engineered robust feature sets mitigating high noise in real-world administrative datasets",
        "Successfully presented live real-time model inferences to national evaluation panels"
      ],
    },
  ] as ExperienceItem[],
  skillCategories: [
    {
      title: "Systems & Low-Level",
      description: "Writing performant, deterministic, and safe software close to the hardware.",
      skills: [
        { name: "Rust", description: "Ownership model, lifetimes, Cargo, Tokio, Clap, Rayon" },
        { name: "C (C99)", description: "Pointers, memory management, Raylib, data layout, structs" },
        { name: "Raylib", description: "2D/3D hardware accelerated rendering, game loops, audio" },
        { name: "Linux / Unix", description: "Process lifecycle, syscalls, shell scripting, Valgrind, GDB" },
      ],
    },
    {
      title: "Cybersecurity & Networks",
      description: "Securing systems, network defense, and vulnerability auditing.",
      skills: [
        { name: "Cybersecurity Defense", description: "Threat modeling, system hardening, access control" },
        { name: "Network Security", description: "Packet inspection, TCP/IP, secure sockets, firewalls" },
        { name: "Vulnerability Assessment", description: "Security audits, OWASP standards, mitigation" },
        { name: "Applied Cryptography", description: "Public key infrastructure, hashing, secure communication" },
      ],
    },
    {
      title: "Machine Learning & AI",
      description: "Data modeling, statistical analysis, and practical problem solving.",
      skills: [
        { name: "Python", description: "NumPy, Pandas, SciPy, Scikit-Learn" },
        { name: "Predictive Modeling", description: "XGBoost, Random Forests, Gradient Boosted Trees" },
        { name: "Feature Engineering", description: "Data cleaning, imputation, outlier mitigation, SHAP" },
        { name: "API Deployment", description: "FastAPI, RESTful inference, low-latency endpoints" },
      ],
    },
  ] as SkillCategory[],
  terminalCommands: [
    { cmd: "help", desc: "List all available terminal commands" },
    { cmd: "about", desc: "Display personal biography & background" },
    { cmd: "projects", desc: "List featured systems, game & ML projects" },
    { cmd: "internship", desc: "Internet Society of India Cybersecurity internship" },
    { cmd: "rust", desc: "Deep-dive into the Rust CLI tool architecture" },
    { cmd: "c-game", desc: "Details on the C & Raylib 2D game implementation" },
    { cmd: "sih", desc: "Smart India Hackathon ML prediction details" },
    { cmd: "skills", desc: "Summarize technical proficiencies" },
    { cmd: "contact", desc: "Display email and GitHub profile" },
    { cmd: "clear", desc: "Clear terminal screen" },
  ],
};
