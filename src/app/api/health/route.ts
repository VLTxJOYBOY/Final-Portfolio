import { NextResponse } from 'next/server';

const startTime = Date.now();

export async function GET() {
  const uptimeSeconds = Math.floor((Date.now() - startTime) / 1000);

  const healthPayload = {
    status: "HEALTHY",
    service: "om-patil-portfolio-backend",
    version: "2.0.0",
    uptimeSeconds,
    runtime: {
      environment: process.env.NODE_ENV || "production",
      nodeVersion: process.version,
      platform: process.platform,
      arch: process.arch,
      memoryUsage: {
        rss: `${Math.round(process.memoryUsage().rss / 1024 / 1024)} MB`,
        heapUsed: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)} MB`,
      },
    },
    recruiterStatus: {
      candidate: "Om Bhimrao Patil",
      availableForOpportunities: true,
      role: "Full-Stack Software Engineer (B.Tech 2027)",
      resumeDownloadAvailable: true,
    },
    timestamp: new Date().toISOString(),
  };

  return NextResponse.json(healthPayload, {
    status: 200,
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
    },
  });
}
