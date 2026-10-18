import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json(
        { verified: false, error: 'Token is required' },
        { status: 400 }
      );
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    // Graceful fallback for local development or if key is not yet configured in environment
    if (!secretKey) {
      console.warn('RECAPTCHA_SECRET_KEY is not defined. Allowing verification in fallback mode.');
      return NextResponse.json({ verified: true, fallback: true }, { status: 200 });
    }

    const verifyUrl = 'https://www.google.com/recaptcha/api/siteverify';

    const response = await fetch(verifyUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(token)}`,
    });

    const data = await response.json();

    // Works with both reCAPTCHA v2 (data.success === true) and v3 (data.score >= 0.5)
    if (data.success && (data.score === undefined || data.score >= 0.5)) {
      return NextResponse.json({ verified: true }, { status: 200 });
    }

    return NextResponse.json(
      { verified: false, error: data['error-codes'] || 'Verification failed' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error);
    return NextResponse.json(
      { verified: false, error: 'Internal server error during verification' },
      { status: 500 }
    );
  }
}
