'use server';

export async function submitCareerApplication(formData: FormData) {
  // ١. وەرگرتنی زانیارییەکان
  const name = formData.get('name');
  const email = formData.get('email');
  const position = formData.get('position');
  const coverNote = formData.get('coverNote');
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

  // ٤. لێرەدا لە داهاتوودا داتاکە دەچێتە داتابەیس
  console.log("New Job Application:", { name, email, position, fileName: cvFile.name });

  // ٥. دروستکردنی ژمارەی داواکاری
  const applicationId = `IDG-APP-${Math.floor(1000 + Math.random() * 9000)}`;

  return { success: true, applicationId: applicationId };
}
