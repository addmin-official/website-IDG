'use server';

import { prisma } from '@/lib/prisma';

export async function submitContactInquiry(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string | null;
  const problem = formData.get('problem') as string | null;
  const message = formData.get('message') as string | null;

  if (!name || !email) {
    return { success: false, error: 'تکایە خانە سەرەکییەکان پڕبکەرەوە.' };
  }

  const referenceId = `IDG-REQ-${Math.floor(1000 + Math.random() * 9000)}`;

  if (!prisma) {
    console.warn('Prisma not available — inquiry not persisted');
    return { success: true, referenceId };
  }

  try {
    await prisma.contactInquiry.create({
      data: {
        name,
        email,
        subject: subject || null,
        problem: problem || null,
        message: message || null,
        referenceId,
      },
    });

    return { success: true, referenceId };
  } catch (error) {
    console.error('Contact inquiry failed:', error);
    return {
      success: false,
      error: 'هەڵەیەک لە پاشەکەوتکردنی داواکاری ڕوویدا.',
    };
  }
}
