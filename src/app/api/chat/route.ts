import { generateText } from 'ai';
import { google } from '@ai-sdk/google';

export async function POST(request: Request) {
  const { message } = await request.json();

  if (!message) {
    return Response.json({ success: false, error: 'No message provided.' }, { status: 400 });
  }

  try {
    const { text: reply } = await generateText({
      model: google('gemini-2.0-flash-001'),
      prompt: `以下のユーザーのメッセージに自然でフレンドリーに返答してください。\n"${message}"`,
    });

    return Response.json({ success: true, reply }, { status: 200 });
  } catch (error) {
    console.error('Gemini API error:', error);
    return Response.json({ success: false, error: 'Failed to generate response.' }, { status: 500 });
  }
}
