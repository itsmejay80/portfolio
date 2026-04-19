// Shared content for all variants
const PORTFOLIO_DATA = {
  name: "Jayesh Patel",
  role: "Full-stack engineer",
  status: "Open to work",
  location: "Toronto, Canada",
  email: "jb24pate@uwaterloo.ca",
  linkedin: "https://www.linkedin.com/in/jbp7/",
  cv: "https://drive.google.com/file/d/1zzRqZxRqfkFtNh8tNl6Ed-YGSYoJRyLv/view?usp=sharing",
  github: "https://github.com/itsmejay80",
  intro: "I design and build calm digital experiences.",
  bio: "Four years of end-to-end product work translating ideas into reliable interfaces, performant services, and thoughtful developer experiences.",
  about: [
    "My path into software started with a Bachelor's in Electronics & Telecommunications and continued through a Master's in Electrical & Computer Engineering at the University of Waterloo.",
    "I enjoy the intersection of clean architecture and intuitive interfaces — shipping resilient APIs with Python, Node, and Java while crafting smooth front-ends with React, Next.js, and TypeScript.",
    "Looking for a full-time role where I can help a team ship focused, minimal products delivered quickly, maintained carefully, measured thoughtfully."
  ],
  stats: [
    { label: "Experience", value: "4+ years" },
    { label: "Focus", value: "Full-stack" },
    { label: "Based", value: "Toronto, CA" },
  ],
  projects: [
    {
      n: "01",
      year: "2026",
      title: "MemCP — Local-first Memory Server",
      blurb: "Private MCP-compatible memory server letting Claude, ChatGPT, and Cursor store and retrieve persistent memories via hybrid semantic + BM25 retrieval.",
      stack: ["Python", "FastMCP", "Qdrant", "Sentence-Transformers", "BM25"],
      href: "https://github.com/itsmejay80",
    },
    {
      n: "02",
      year: "2024",
      title: "Encrypted Chat Application",
      blurb: "Web chat with end-to-end encryption, real-time sockets, and a minimal interface.",
      stack: ["React", "Express", "Socket.io", "SHA-256"],
      href: "https://github.com/itsmejay80/ChatApplication",
    },
    {
      n: "03",
      year: "2024",
      title: "Payment & Inventory Microservice",
      blurb: "Event-driven microservices using Redis Streams, FastAPI, and a React admin surface.",
      stack: ["FastAPI", "Redis", "Python", "React"],
      href: "https://github.com/itsmejay80/microserverice",
    },
    {
      n: "04",
      year: "2023",
      title: "Prompt Share",
      blurb: "A community prompt-sharing platform built on Next.js 13 with server components.",
      stack: ["Next.js", "MongoDB", "Google Auth", "Tailwind"],
      href: "https://github.com/itsmejay80/prompt-share",
    },
    {
      n: "05",
      year: "2023",
      title: "Twitter Clone (T3)",
      blurb: "Type-safe social feed with tRPC, Prisma, and edge-ready infrastructure.",
      stack: ["T3", "tRPC", "Prisma", "PlanetScale"],
      href: "https://github.com/itsmejay80/twitter-clone",
    },
  ],
  capabilities: {
    "Front-end": ["React", "Next.js", "TypeScript", "Tailwind", "Redux"],
    "Back-end": ["Node.js", "Python", "FastAPI", "Django", "Java / Spring"],
    "Data & Infra": ["PostgreSQL", "MongoDB", "Redis", "AWS", "GCP", "Docker"],
    "Emerging": ["PyTorch", "ADK", "MCP", "GraphQL"],
  },
  experience: [
    {
      years: "2023 — Now",
      role: "Software Engineer",
      org: "Codal Inc.",
      place: "Remote",
      note: "Shipping digital products with Next.js, React, Django, FastAPI, PyTorch, AWS & GCP.",
    },
    {
      years: "2021 — 2022",
      role: "Software Developer",
      org: "Startup",
      place: "Mapusa, IN",
      note: "Full-stack work across React, Vue, Ember, Node, FastAPI, MongoDB, MySQL, AWS.",
    },
    {
      years: "2019 — 2020",
      role: "MERN Developer",
      org: "Agency",
      place: "Surat, IN",
      note: "Built MERN products and grew into full-stack ownership across multiple clients.",
    },
  ],
};

window.PORTFOLIO_DATA = PORTFOLIO_DATA;
