import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const runtime = 'nodejs';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ docId: string }> }
) {
  const { docId } = await params;

  // Sanitize filename to prevent directory traversal
  const safeId = docId.replace(/[^a-zA-Z0-9_-]/g, '');
  const filePath = path.join(process.cwd(), 'public', 'documents', `${safeId}.pdf`);

  if (!fs.existsSync(filePath)) {
    return new NextResponse('Document not found', { status: 404 });
  }

  try {
    const fileBuffer = fs.readFileSync(filePath);
    const filename = `${safeId}.pdf`;

    return new NextResponse(new Uint8Array(fileBuffer), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Content-Length': fileBuffer.length.toString(),
        'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
      },
    });
  } catch (error) {
    console.error('Error serving guide PDF:', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
}
