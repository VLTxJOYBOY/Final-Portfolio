import { NextResponse } from 'next/server';
import { personalInfo, stats, skillCategories, projects, educationList, certifications, achievements, extraCurricular, languages } from '@/data/content';

export async function GET() {
  const profilePayload = {
    status: "success",
    timestamp: new Date().toISOString(),
    candidate: {
      name: personalInfo.name,
      role: personalInfo.title,
      educationSummary: personalInfo.roleSubtitle,
      location: personalInfo.location,
      contact: {
        email: personalInfo.email,
        phone: personalInfo.phone,
      },
      verifiedLinks: {
        github: personalInfo.github,
        linkedin: personalInfo.linkedin,
        resumeDownload: personalInfo.resumeUrl,
      },
      summary: personalInfo.summary,
    },
    keyMetrics: stats,
    education: educationList,
    skills: skillCategories,
    projects: projects.map((p) => ({
      id: p.id,
      title: p.title,
      category: p.category,
      year: p.year,
      overview: p.overview,
      architecture: p.architecture,
      specialFeatures: p.specialFeatures,
      metrics: p.metrics,
      techStack: p.techStack,
    })),
    certifications,
    achievements,
    extraCurricular,
    languages,
  };

  return NextResponse.json(profilePayload, {
    status: 200,
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=59',
      'X-Powered-By': 'Next.js 15 App Router',
    },
  });
}
