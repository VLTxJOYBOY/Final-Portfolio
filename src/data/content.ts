import { Project, Experience, SkillCategory, Education, Certification } from '../types';

export const personalInfo = {
  name: "Om Bhimrao Patil",
  shortName: "Om Patil",
  title: "Full-Stack Software Engineer & AI Integrator",
  roleSubtitle: "Computer Engineering Undergraduate (B.Tech, 2027) • PCCOE Pune",
  location: "Pune, Maharashtra, India",
  phone: "+91 98816 87451",
  email: "om.b.patil6268@gmail.com",
  github: "https://github.com/VLTxJOYBOY",
  linkedin: "https://linkedin.com/in/om-patil",
  resumeUrl: "/Om_Bhimrao_Patil_Resume.pdf",
  resumeFileName: "Om_Bhimrao_Patil_Resume.pdf",
  summary: "Computer Engineering undergraduate (B.Tech, 2027) experienced in building web applications with React, Next.js and Node.js, with 100+ DSA problems solved in C++. Strong grounding in algorithms and database design, plus hands-on LLM API integration. Seeking an entry-level software engineering role building scalable, user-facing products.",
  status: "Actively seeking Software Engineering & Full-Stack Opportunities",
};

export const stats = [
  { value: "100+", label: "DSA Solved in C++", highlight: "Competitive Coding" },
  { value: "4-Star", label: "HackerRank Problem Solving", highlight: "Gold Badge" },
  { value: "95.60%", label: "SSC Board Score", highlight: "Academic Excellence" },
  { value: "2027", label: "B.Tech Computer Engineering", highlight: "PCCOE Pune" },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C++", level: "Advanced (100+ DSA)", highlight: true },
      { name: "JavaScript", level: "Advanced (ES6+)", highlight: true },
      { name: "Python", level: "Proficient", highlight: true },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React", level: "Expert", highlight: true },
      { name: "Next.js", level: "Advanced (App Router)", highlight: true },
      { name: "Tailwind CSS", level: "Advanced", highlight: true },
      { name: "HTML5 & CSS3", level: "Expert" },
      { name: "Bootstrap", level: "Proficient" },
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node.js", level: "Advanced", highlight: true },
      { name: "MySQL", level: "Advanced (Schema & Indexing)", highlight: true },
      { name: "MongoDB", level: "Advanced (Aggregation & Queries)", highlight: true },
      { name: "PHP", level: "Proficient" },
    ],
  },
  {
    title: "AI & Modern Tooling",
    skills: [
      { name: "Prompt Engineering", level: "Advanced", highlight: true },
      { name: "LLM APIs (OpenAI, Claude)", level: "Advanced", highlight: true },
      { name: "AWS (EC2, S3)", level: "Intermediate", highlight: true },
      { name: "Git & GitHub", level: "Advanced" },
      { name: "VS Code, Cursor, Claude Code", level: "Advanced" },
      { name: "Streamlit & LangGraph", level: "Proficient" },
    ],
  },
  {
    title: "Core Computer Science",
    skills: [
      { name: "Data Structures & Algorithms", level: "Strong Grounding", highlight: true },
      { name: "Object-Oriented Programming (OOP)", level: "Advanced", highlight: true },
      { name: "Database Management Systems (DBMS)", level: "Advanced", highlight: true },
      { name: "Agile Fundamentals", level: "Practiced" },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Software Development Intern",
    company: "Synthomind Innovations",
    period: "07/2026 – 09/2026",
    type: "Internship",
    bullets: [
      "Contributed to an AI-powered application integrating LLM APIs (OpenAI/Claude) to build conversational and content-generation features.",
      "Worked with React and Node.js on the frontend/backend integration layer, connecting UI components to AI API endpoints.",
      "Assisted in prompt design and testing to improve response accuracy and reduce output latency.",
      "Collaborated with a small team using Git for version control, participating in code reviews and daily progress check-ins.",
    ],
    technologies: ["React", "Node.js", "LLM APIs", "OpenAI", "Claude", "Git", "REST APIs"],
  },
  {
    id: "exp-2",
    role: "In-House Intern",
    company: "PCCOE — UniSphere College Event Management Platform",
    period: "2025",
    type: "Academic Internship",
    bullets: [
      "Developed UniSphere, a centralised platform for college clubs to manage event registration, attendance, certification and reporting.",
      "Built a Smart Attendance module with dynamically rotating QR validation and Role-Based Access Control for Student and Admin users.",
      "Delivered automated certificate generation and a real-time analytics dashboard for event organisers.",
    ],
    technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS", "QR Validation", "RBAC"],
  },
];

export const projects: Project[] = [
  {
    id: "intellimail",
    title: "IntelliMail — Intelligent Email Automation Suite",
    subtitle: "AI tool automating internship outreach, inbox replies and email writing with human approval before sending.",
    category: "ai",
    year: "2026",
    overview: "Built three LangGraph agents (HR Outreach, Inbox Reply, Smart Compose) with stateful routing and a Streamlit 3-tab interface. The outreach agent parses resume PDFs, researches companies via Tavily search and drafts tailored emails with a Groq LLM. The inbox agent fetches unread mail via IMAP, classifies intent with an LLM and sends replies over SMTP.",
    architecture: "Python + LangGraph StateGraph + Groq LLM API + Streamlit Frontend + Tavily Search API + IMAP/SMTP Protocols.",
    specialFeatures: [
      "Human review before every send using LangGraph interrupts for safety and verification",
      "Thread-preserving automated email replies over SMTP",
      "Real-time CSV logging of all sent emails and outreach statuses",
      "Autonomous resume parsing and company background research via Tavily API",
    ],
    metrics: [
      { label: "Agents Built", value: "3 Agents" },
      { label: "Response Engine", value: "Groq LLM" },
      { label: "Review Flow", value: "100% Verified" },
    ],
    techStack: ["Python", "LangGraph", "Groq LLM", "Streamlit", "Tavily API", "IMAP/SMTP"],
    githubUrl: "https://github.com/VLTxJOYBOY",
    featured: true,
    bulletPoints: [
      "Engineered stateful multi-agent workflows using LangGraph with human-in-the-loop validation.",
      "Integrated Tavily Search API for dynamic company reconnaissance prior to cold emailing.",
      "Handled bidirectional email transactions with IMAP inbound filtering and SMTP outbound dispatching.",
    ],
  },
  {
    id: "unisphere",
    title: "UniSphere — College Event Management Platform",
    subtitle: "Centralised web platform for college clubs managing the complete lifecycle from registration to real-time reporting.",
    category: "fullstack",
    year: "2025",
    overview: "A centralised platform built for PCCOE college clubs to streamline event registrations, ticket issuance, dynamic attendance tracking, automatic certification, and post-event analytics.",
    architecture: "Next.js App Router + Node.js Backend API + MongoDB Atlas with Indexing + Tailwind CSS + Canvas QR Generator.",
    specialFeatures: [
      "Smart Attendance module with dynamically rotating QR validation eliminating proxy check-ins",
      "Automated participation certificate generation pipeline",
      "Real-time analytics dashboard for college event organisers and faculty",
      "Role-Based Access Control (RBAC) separating Student and Admin privileges across all protected routes",
    ],
    metrics: [
      { label: "API Latency", value: "-30% Faster" },
      { label: "Attendance Fraud", value: "0% Proxy" },
      { label: "Certificates", value: "Automated" },
    ],
    techStack: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS", "RBAC", "QR Validation"],
    githubUrl: "https://github.com/VLTxJOYBOY",
    featured: true,
    bulletPoints: [
      "Optimised MongoDB queries and composite indexing, reducing average API response time by ~30%.",
      "Implemented timed rotating QR codes that prevent attendance spoofing and proxy check-ins.",
      "Constructed reusable student registration dashboards with automated PDF certificate delivery.",
    ],
  },
  {
    id: "smart-housing",
    title: "Smart Housing Solution — PG Finder",
    subtitle: "Brokerage-free platform connecting students directly with paying-guest accommodation owners with verified privacy.",
    category: "web",
    year: "2024",
    overview: "Eliminates middleman brokerage fees for college students by providing direct verified access to paying-guest accommodation owners, complete with normalized database models and scraping protection.",
    architecture: "PHP Backend + Normalised MySQL Schema + Secure Session Auth + Tailwind CSS UI.",
    specialFeatures: [
      "Advanced multi-parameter search and filtering across budget, location, and amenities",
      "Owner contact details protected behind verified-user access to prevent data scraping and spam",
      "Copyright formally registered for the project",
      "Secure session-based authentication and role authorization",
    ],
    metrics: [
      { label: "Brokerage Fee", value: "0% Brokerage" },
      { label: "Data Protection", value: "Anti-Scrape" },
      { label: "Copyright", value: "Registered" },
    ],
    techStack: ["PHP", "MySQL", "Tailwind CSS", "Session Auth", "Database Design"],
    githubUrl: "https://github.com/VLTxJOYBOY",
    featured: true,
    bulletPoints: [
      "Designed a normalized 3NF MySQL relational database schema ensuring data integrity.",
      "Protected landlord contact data behind session-gated tokens to eliminate bot scraping.",
      "Formally registered project copyright after successful campus pilot.",
    ],
  },
];

export const educationList: Education[] = [
  {
    institution: "Pimpri Chinchwad College of Engineering (PCCOE), Pune",
    degree: "Bachelor of Technology (B.Tech), Computer Engineering",
    period: "2023 – 2027",
    details: "Expected Graduation: June 2027 • Focus on Algorithms, Data Structures, Web Systems & Software Engineering",
  },
  {
    institution: "Secondary School Certificate (SSC)",
    degree: "High School Board Examination",
    period: "Passed with Distinction",
    score: "95.60%",
    details: "Demonstrated strong foundation in Mathematics, Science and Analytical Problem Solving.",
  },
];

export const certifications: Certification[] = [
  {
    title: "SQL and Database Fundamentals",
    issuer: "Database Architecture & Optimization",
    highlight: true,
  },
  {
    title: "Master Azure DevOps: From Beginner to Advanced",
    issuer: "CI/CD & Cloud Infrastructure",
    highlight: true,
  },
  {
    title: "Fullstack Python and Django Framework",
    issuer: "Backend & Web Architecture",
    highlight: true,
  },
  {
    title: "Java Masterclass 2025: 130+ Hours of Expert Lessons",
    issuer: "Object-Oriented Programming & Systems",
    highlight: true,
  },
];

export const achievements = [
  {
    title: "HackerRank 4-Star Rating in Problem Solving",
    description: "Earned 4-Star Gold Badge ranking on HackerRank for algorithmic problem solving and logic implementation.",
  },
  {
    title: "100+ Data Structures & Algorithms Problems Solved in C++",
    description: "Demonstrated mastery of core algorithmic patterns including graphs, trees, dynamic programming, and arrays.",
  },
];

export const extraCurricular = [
  {
    title: "National Service Scheme (NSS)",
    role: "Volunteer",
    description: "Active contributor to community development initiatives, environmental awareness, and student social drives.",
  },
  {
    title: "College Event Management",
    role: "Event Management Co-Head",
    description: "Led logistics, technical infrastructure, and coordination for inter-collegiate fests and technical symposiums.",
  },
];

export const languages = [
  { name: "English", proficiency: "Professional Proficiency" },
  { name: "Hindi", proficiency: "Native" },
  { name: "Marathi", proficiency: "Native" },
];
