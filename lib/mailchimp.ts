import crypto from 'crypto';

export interface SubscribeParams {
  email: string;
  locale?: string;
  status?: 'pending' | 'subscribed';
}

export interface SubscribeResult {
  success: boolean;
  message?: string;
  simulated?: boolean;
  error?: string;
}

export async function subscribeToMailchimp({
  email,
  locale = 'en',
  status = 'pending', // 'pending' triggers Mailchimp double opt-in confirmation email workflow
}: SubscribeParams): Promise<SubscribeResult> {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const listId = process.env.MAILCHIMP_LIST_ID;

  // Graceful fallback for development, testing, or when keys are not configured yet
  if (!apiKey || !listId) {
    console.warn(
      'Mailchimp API Key or List ID not configured in environment. Operating in graceful fallback mode.'
    );
    return {
      success: true,
      simulated: true,
      message: 'Subscription registered successfully (fallback mode).',
    };
  }

  // Extract datacenter prefix from API key (e.g. "key-us19" -> "us19")
  const serverPrefix =
    process.env.MAILCHIMP_SERVER_PREFIX ||
    (apiKey.includes('-') ? apiKey.split('-')[1] : 'us1');

  // MD5 hash of lowercase email for Mailchimp member URL
  const subscriberHash = crypto
    .createHash('md5')
    .update(email.toLowerCase().trim())
    .digest('hex');

  const endpoint = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${listId}/members/${subscriberHash}`;

  const langTag = locale.toUpperCase();
  const tags = [langTag, 'IDG-Newsletter', 'Website-Subscriber'];

  const payload = {
    email_address: email.toLowerCase().trim(),
    status_if_new: status,
    status: status,
    tags,
    merge_fields: {
      LANGUAGE: langTag,
    },
  };

  try {
    const response = await fetch(endpoint, {
      method: 'PUT', // PUT enables upserting (create or update member)
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString('base64')}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      if (
        data.title === 'Member Exists' ||
        data.detail?.toLowerCase().includes('already a list member')
      ) {
        return {
          success: true,
          message: 'Already subscribed to IDG newsletter.',
        };
      }
      return {
        success: false,
        error: data.detail || data.title || 'Failed to subscribe to Mailchimp.',
      };
    }

    return {
      success: true,
      message: 'Subscription successful. Confirmation email dispatched.',
    };
  } catch (err: unknown) {
    const errorMsg =
      err instanceof Error ? err.message : 'Network error during Mailchimp subscription';
    console.error('Mailchimp API exception:', errorMsg);
    return {
      success: false,
      error: errorMsg,
    };
  }
}
