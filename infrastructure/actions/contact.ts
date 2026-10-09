'use server';

import { getPrisma } from '@/lib/prisma';

// ئەم فەنکشنە تەنها لەسەر سێرڤەر کار دەکات و داتاکان دەپارێزێت
export async function submitContactInquiry(formData: FormData) {
  // ١. وەرگرتنی زانیارییەکان لە فۆڕمەکەوە
  const name = formData.get('name') as string | null;
  const email = formData.get('email') as string | null;
  const subject = formData.get('subject') as string | null;
  const problem = formData.get('problem') as string | null; // کێشە سەلمێنراوەکە
  const message = formData.get('message') as string | null;

  // ٢. پشکنینی سەرەتایی بۆ دڵنیابوون لەوەی خانە گرنگەکان پڕکراونەتەوە
  if (!name || !email || !problem) {
    return { success: false, error: "تکایە خانە سەرەکییەکان پڕبکەرەوە." };
  }

  // ٣. دروستکردنی ژمارەیەکی فەرمی بۆ بەدواداچوون (Reference ID) بە شێوازی IDG
  const referenceId = `IDG-REQ-${Math.floor(1000 + Math.random() * 9000)}`;

  // ٤. پاشەکەوتکردن لە داتابەیس (PostgreSQL / Prisma)
  try {
    const prisma = await getPrisma();
    if (prisma?.contactInquiry) {
      await prisma.contactInquiry.create({
        data: {
          referenceId,
          name,
          email,
          subject: subject || null,
          problem,
          message: message || null,
        },
      });
      console.log(`[DB] Successfully stored inquiry ${referenceId}`);
    } else {
      console.log(`[Log Only] Inquiry received (DB offline):`, { referenceId, name, email, subject, problem });
    }
  } catch (dbError) {
    console.error(`[DB Error] Failed to persist inquiry to database:`, dbError);
    // بەردەوام دەبین بۆ بەکارهێنەر تا ئاگاداربێت ژمارەی داواکارییەکەی پێدراوە
  }

  // ٥. گەڕاندنەوەی وەڵام بۆ ڕووکارەکە
  return { success: true, referenceId };
}
