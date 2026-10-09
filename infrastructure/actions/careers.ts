'use server';

import { getPrisma } from '@/lib/prisma';

export async function submitCareerApplication(formData: FormData) {
  // ١. وەرگرتنی زانیارییەکان
  const name = formData.get('name') as string | null;
  const email = formData.get('email') as string | null;
  const position = formData.get('position') as string | null;
  const coverNote = formData.get('coverNote') as string | null;
  const cvFile = formData.get('cv') as File | null;

  // ٢. پشکنینی پڕکردنەوەی خانەکان
  if (!name || !email || !position || !cvFile) {
    return { success: false, error: "تکایە هەموو خانە پێویستەکان پڕبکەرەوە." };
  }

  // ٣. پشکنینی ئاسایشی فایل (بەپێی پێوەرەکانی IDG)
  if (cvFile.type !== 'application/pdf') {
    return { success: false, error: "تەنها فایلی PDF قبوڵکراوە." };
  }

  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
  if (cvFile.size > MAX_FILE_SIZE) {
    return { success: false, error: "قەبارەی فایلەکە نابێت لە 5MB زیاتر بێت." };
  }

  // ٤. دروستکردنی ژمارەی داواکاری
  const applicationId = `IDG-APP-${Math.floor(1000 + Math.random() * 9000)}`;

  // ٥. پاشەکەوتکردن لە داتابەیس (PostgreSQL / Prisma)
  try {
    const prisma = await getPrisma();
    if (prisma?.careerApplication) {
      await prisma.careerApplication.create({
        data: {
          applicationId,
          name,
          email,
          position,
          coverNote: coverNote || null,
          cvFileName: cvFile.name,
        },
      });
      console.log(`[DB] Successfully stored career application ${applicationId}`);
    } else {
      console.log(`[Log Only] New Job Application received (DB offline):`, {
        applicationId,
        name,
        email,
        position,
        fileName: cvFile.name,
      });
    }
  } catch (dbError) {
    console.error(`[DB Error] Failed to persist career application to database:`, dbError);
  }

  return { success: true, applicationId };
}
