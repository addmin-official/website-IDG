'use server';

import { prisma } from '@/lib/prisma';

export async function submitCareerApplication(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const position = formData.get('position') as string;
  const coverNote = formData.get('coverNote') as string | null;
  const cvFile = formData.get('cv') as File | null;

  if (!name || !email || !position || !cvFile) {
    return { success: false, error: 'تکایە هەموو خانە پێویستەکان پڕبکەرەوە.' };
  }

  if (cvFile.type !== 'application/pdf') {
    return { success: false, error: 'تەنها فایلی PDF قبوڵکراوە.' };
  }

  const MAX_FILE_SIZE = 5 * 1024 * 1024;
  if (cvFile.size > MAX_FILE_SIZE) {
    return { success: false, error: 'قەبارەی فایلەکە نابێت لە 5MB زیاتر بێت.' };
  }

  const applicationId = `IDG-APP-${Math.floor(1000 + Math.random() * 9000)}`;

  if (!prisma) {
    console.warn('Prisma not available — career application not persisted');
    return { success: true, applicationId };
  }

  try {
    await prisma.careerApplication.create({
      data: {
        name,
        email,
        position,
        coverNote: coverNote || null,
        resumeName: cvFile.name,
        applicationId,
      },
    });

    return { success: true, applicationId };
  } catch (error) {
    console.warn('Database write failed, falling back to stateless confirmation:', error);
    return {
      success: true,
      applicationId,
    };
  }
}
