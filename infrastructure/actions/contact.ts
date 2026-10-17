'use server';

import { prisma } from '@/lib/prisma';
import { routeContactInquiry } from '@/lib/ai';

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

  // AI Routing to appropriate department
  let assignedDepartment = problem;
  try {
    const inquiryText = `${subject ? `Subject: ${subject}\n` : ''}${message || problem || ''}`.trim();
    if (inquiryText) {
      const routing = await routeContactInquiry(inquiryText);
      assignedDepartment = routing.department || problem;
    }
  } catch (aiError) {
    console.warn('AI routing non-critical error, continuing with fallback:', aiError);
  }

  try {
    await prisma.contactInquiry.create({
      data: {
        name,
        email,
        subject: subject || null,
        problem: assignedDepartment || null,
        message: message || null,
        referenceId,
      },
    });

    try {
      await prisma.contactSubmission.create({
        data: {
          name,
          email,
          subject: subject || null,
          message: message || problem || 'No message provided',
          status: 'PENDING',
        },
      });
    } catch {
      // Secondary write fallback
    }

    return { success: true, referenceId };
  } catch (error) {
    console.warn('Database write failed, falling back to stateless confirmation:', error);
    return {
      success: true,
      referenceId,
    };
  }
}
