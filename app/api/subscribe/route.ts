import { NextResponse } from 'next/server';
import { subscribeToMailchimp } from '@/lib/mailchimp';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, locale } = body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    const result = await subscribeToMailchimp({
      email: email.trim(),
      locale: locale || 'ku',
      status: 'pending', // Triggers double opt-in confirmation email workflow
    });

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error || 'Subscription failed.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: result.message || 'Subscription registered. Please confirm via the email sent to your inbox.',
      simulated: result.simulated,
    });
  } catch (error) {
    console.error('Newsletter subscribe route error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
