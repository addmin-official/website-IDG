'use server';

// ئەم فەنکشنە تەنها لەسەر سێرڤەر کار دەکات و داتاکان دەپارێزێت
export async function submitContactInquiry(formData: FormData) {
  // ١. وەرگرتنی زانیارییەکان لە فۆڕمەکەوە
  const name = formData.get('name');
  const email = formData.get('email');
  const subject = formData.get('subject');
  const problem = formData.get('problem'); // کێشە سەلمێنراوەکە
  const message = formData.get('message');

  // ٢. پشکنینی سەرەتایی بۆ دڵنیابوون لەوەی خانە گرنگەکان پڕکراونەتەوە
  if (!name || !email || !problem) {
    return { success: false, error: "تکایە خانە سەرەکییەکان پڕبکەرەوە." };
  }

  // ٣. لێرەدا لە داهاتوودا داتاکە دەنێرین بۆ داتابەیس (وەک PostgreSQL)
  console.log("New Inquiry Received:", { name, email, subject, problem });

  // ٤. دروستکردنی ژمارەیەکی فەرمی بۆ بەدواداچوون (Reference ID) بە شێوازی IDG
  const referenceId = `IDG-REQ-${Math.floor(1000 + Math.random() * 9000)}`;

  // ٥. گەڕاندنەوەی وەڵام بۆ ڕووکارەکە
  return { success: true, referenceId: referenceId };
}
