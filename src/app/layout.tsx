import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Om Bhimrao Patil | Full-Stack Software Engineer & AI Developer",
  description:
    "Computer Engineering undergraduate (B.Tech, 2027) experienced in building web applications with React, Next.js and Node.js, with 100+ DSA problems solved in C++. Seeking software engineering roles.",
  keywords: [
    "Om Patil",
    "Om Bhimrao Patil",
    "Full-Stack Engineer",
    "Software Engineer Portfolio",
    "React",
    "Next.js 15",
    "Node.js",
    "Python",
    "LangGraph",
    "C++ DSA",
    "PCCOE Pune",
    "B.Tech Computer Engineering",
  ],
  authors: [{ name: "Om Bhimrao Patil" }],
  creator: "Om Bhimrao Patil",
  openGraph: {
    title: "Om Bhimrao Patil — Full-Stack Software Engineer",
    description:
      "Computer Engineering undergraduate (B.Tech 2027) with 100+ DSA problems in C++, hands-on LLM API integration, and full-stack production projects.",
    url: "https://ompatil.dev",
    siteName: "Om Bhimrao Patil — Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Om Bhimrao Patil — Full-Stack Software Engineer",
    description: "Specialized in React, Next.js, Node.js, C++ DSA, and AI APIs.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#02040a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Om Bhimrao Patil",
    "jobTitle": "Full-Stack Software Engineer",
    "description": "Computer Engineering undergraduate (B.Tech, 2027) experienced in building web applications with React, Next.js, Node.js, and hands-on LLM APIs with 100+ DSA solved in C++.",
    "url": "https://ompatil.dev",
    "alumniOf": "Pimpri Chinchwad College of Engineering (PCCOE), Pune",
    "knowsAbout": ["React", "Next.js", "Node.js", "C++", "Python", "LangGraph", "MySQL", "MongoDB", "Data Structures & Algorithms"],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-indigo-500/30 selection:text-indigo-200 min-h-screen bg-[#02040a] text-slate-100">
        {children}
      </body>
    </html>
  );
}
