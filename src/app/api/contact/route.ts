import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, email, roleType, subject, message } = body;

    // Strict validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Full name is required.' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || !email.includes('@') || !email.includes('.')) {
      return NextResponse.json(
        { success: false, error: 'Valid work email address is required.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: 'Please provide a detailed message (minimum 5 characters).' },
        { status: 400 }
      );
    }

    const inquiryId = `JP-INQ-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

    // Log internally for developer/server console
    console.log(`[Japan Dev Inbound Inquiry] ID: ${inquiryId}`, {
      from: `${name} (${company || 'Individual'})`,
      email,
      roleType,
      subject,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        inquiryId,
        message: 'Your inquiry has been successfully transmitted to Om Patil.',
        sla: 'Reply expected within 24 hours (JST).',
        receivedData: {
          name,
          company,
          email,
          roleType,
          subject,
        },
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    return NextResponse.json(
      { success: false, error: 'Invalid JSON request payload.', details: String(error) },
      { status: 400 }
    );
  }
}

