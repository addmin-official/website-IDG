import { generateKnowledgeResponse } from '@/lib/ai';

export async function POST(req: Request) {
  try {
    const { query } = await req.json();

    if (!query || typeof query !== 'string') {
      return Response.json(
        { error: 'query parameter is required' },
        { status: 400 }
      );
    }

    const response = await generateKnowledgeResponse(query);
    return Response.json({ response });
  } catch (error) {
    console.error('Error generating AI knowledge response:', error);
    return Response.json(
      { error: 'Failed to process AI query', details: String(error) },
      { status: 500 }
    );
  }
}
