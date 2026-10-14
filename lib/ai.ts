import { GoogleGenAI } from '@google/genai';

// Initialize Gemini client with process.env.GEMINI_API_KEY
const apiKey = process.env.GEMINI_API_KEY?.trim();
const genAI = apiKey ? new GoogleGenAI({ apiKey }) : null;

// Primary & fallback fast models
const CANDIDATE_MODELS = [
  'gemini-3.5-flash-lite',
  'gemini-3-flash-preview',
  'gemini-3.8-flash',
  'gemini-2.0-flash',
];

/**
 * Generates an AI-powered knowledge response for queries about IDG.
 */
export async function generateKnowledgeResponse(query: string): Promise<string> {
  if (!genAI) {
    throw new Error('GEMINI_API_KEY is not configured in environment variables.');
  }

  const prompt = `You are the AI assistant for Iraq Digital Gateway (IDG), Iraq's sovereign parent technology company and institutional venture studio.
Provide an accurate, institutional, and helpful answer for the following question:
"${query}"`;

  let lastError: unknown;
  for (const model of CANDIDATE_MODELS) {
    try {
      const result = await genAI.models.generateContent({
        model,
        contents: prompt,
      });
      if (result.text) {
        return result.text.trim();
      }
    } catch (err) {
      lastError = err;
    }
  }

  throw new Error(`Failed to generate knowledge response: ${String(lastError)}`);
}

export interface RoutingResult {
  department: string;
  priority: 'high' | 'medium' | 'low';
}

/**
 * Routes contact inquiries to the appropriate IDG department based on AI semantic analysis.
 */
export async function routeContactInquiry(inquiry: string): Promise<RoutingResult> {
  const fallbackResult: RoutingResult = {
    department: 'General Inquiries',
    priority: 'medium',
  };

  if (!genAI || !inquiry?.trim()) {
    return fallbackResult;
  }

  const prompt = `Categorize this inquiry and suggest department within Iraq Digital Gateway (IDG):
"${inquiry}"
Response format ONLY valid JSON: {"department": "...", "priority": "high|medium|low"}`;

  for (const model of CANDIDATE_MODELS) {
    try {
      const result = await genAI.models.generateContent({
        model,
        contents: prompt,
      });

      const text = result.text?.trim() || '';
      // Strip any markdown code fences if present (e.g. ```json ... ```)
      const cleanJson = text.replace(/^```json\s*/i, '').replace(/^```\s*/, '').replace(/```$/g, '').trim();
      const parsed = JSON.parse(cleanJson);

      return {
        department: parsed.department || fallbackResult.department,
        priority: (['high', 'medium', 'low'].includes(parsed.priority) ? parsed.priority : 'medium') as 'high' | 'medium' | 'low',
      };
    } catch {
      // Continue to next candidate model
      continue;
    }
  }

  return fallbackResult;
}
