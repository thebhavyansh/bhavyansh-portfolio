export const personalData = {
  name: "Bhavyansh Tomar",
  title: "Senior Frontend Engineer & UI/UX Designer",
  email: "bhavyansh.tomar@example.com", // Placeholder, check if user provided
  github: "https://github.com/bhavyanshtomar",
  linkedin: "https://linkedin.com/in/bhavyanshtomar",
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
];

export const experiences = [
  {
    company: "Square Yards Consulting Pvt. Ltd.",
    role: "Software Engineer",
    period: "Jul 2025 – Present",
    description: [
      "Built the core of the CredIQ platform using React.js and Material UI for a clean user interface, powered by a Node.js and Express.js backend to handle all loan processing.",
      "Developed secure backend services using Bearer Token authentication to protect sensitive PII and managed complex business logic for loan approvals and routing.",
      "Worked with Generative AI to automatically extract information from documents like KYC and bank statements, while also using AI to provide accurate, instant answers to user questions.",
      "Integrated a WhatsApp engagement layer, allowing users to check their CIBIL scores and receive personalized loan offers directly through a simple chat interface.",
      "Used MySQL and Sequelize ORM to securely store records, and integrated Elasticsearch to allow for high-speed searching and instant reporting across the platform.",
      "Enhanced platform performance by using Redis caching for quick credit analysis and was awarded Best Performer of the Quarter for delivering high-quality technical features.",
    ],
  },
  {
    company: "Chemdraw Consulting Pvt. Ltd.",
    role: "Full-Stack Developer Intern",
    period: "Previous", // Adjust if needed
    description: [
      "Modernized frontend and backend components to improve platform performance and UX.",
      "Built responsive interfaces using Next.js and Tailwind CSS.",
      "Developed RESTful APIs with Express.js to support data-intensive workflows.",
      "Created interactive dashboards and visualizations using Chart.js.",
    ],
  },
];

export const projects = [
  {
    title: "AI Mock Interview Platform",
    description: "A GenAI-powered platform simulating real-world scenarios. Features Gemini AI for dynamic question generation, intelligent response evaluation via LLM prompts, and real-time audio/video recording with speech-to-text conversion.",
    tech: ["Gemini AI", "Next.js", "Speech-to-Text", "WebRTC"],
    link: "#",
    color: "from-blue-600 to-indigo-600"
  },
  {
    title: "FShare",
    description: "A secure file-sharing application architected for simplicity. Built with React.js, Next.js, Firebase Storage, and Clerk for authentication. Includes password-protected links and email notifications.",
    tech: ["React.js", "Next.js", "Firebase", "Clerk"],
    link: "#",
    color: "from-purple-600 to-pink-600"
  },
  {
    title: "ExpenseX",
    description: "An AI-enhanced personal finance platform. Features AI-powered OCR to extract data from receipts, automatic recurring expense detection, and interactive spending visualizations.",
    tech: ["AI OCR", "React.js", "Tailwind CSS", "Persistence"],
    link: "#",
    color: "from-emerald-600 to-cyan-600"
  },
];

export const skills = [
  { category: "Frontend", items: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "Material UI", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express.js", "Sequelize ORM"] },
  { category: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "Elasticsearch"] },
  { category: "AI/GenAI", items: ["LLM APIs", "Prompt Engineering", "AI OCR", "Speech-to-Text"] },
];
