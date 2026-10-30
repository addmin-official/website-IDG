import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ applicationId: string }> }
) {
  const { applicationId } = await params;

  if (!applicationId || !prisma) {
    return new NextResponse('Invalid request or database unavailable', { status: 400 });
  }

  try {
    const application = await prisma.careerApplication.findUnique({
      where: { applicationId },
      select: {
        resumeName: true,
        resumeData: true,
        resumeBase64: true,
        name: true,
      },
    });

    if (!application) {
      return new NextResponse('Application not found', { status: 404 });
    }

    let pdfBuffer: Buffer | null = null;
    if (application.resumeData) {
      pdfBuffer = Buffer.from(application.resumeData);
    } else if (application.resumeBase64) {
      pdfBuffer = Buffer.from(application.resumeBase64, 'base64');
    }

    if (!pdfBuffer || pdfBuffer.length === 0) {
      return new NextResponse('Resume document not stored for this application', { status: 404 });
    }

    const filename = application.resumeName || `${application.name.replace(/\s+/g, '_')}_CV.pdf`;
    const encodedFilename = encodeURIComponent(filename);

    return new NextResponse(new Uint8Array(pdfBuffer), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `inline; filename="${encodedFilename}"; filename*=UTF-8''${encodedFilename}`,
        'Content-Length': pdfBuffer.length.toString(),
        'Cache-Control': 'private, no-cache, no-store, must-revalidate',
      },
    });
  } catch (error) {
    console.error('Failed to retrieve CV:', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
}
