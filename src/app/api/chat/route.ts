import { generateText } from 'ai';
import { google } from '@ai-sdk/google';

const faqMap: { [key: string]: string } = {
  'how to use': '',
  'feature': '現在の価格は税込19,800円です。',
};

export async function POST(request: Request) {
  const { message } = await request.json();

  if (!message) {
    return Response.json({ success: false, error: 'No message provided.' }, { status: 400 });
  }

  // キーワードにマッチするか判定
  const match = Object.entries(faqMap).find(([keyword]) =>
    message.includes(keyword)
  );

  if (match) {
    return Response.json({ success: true, reply: match[1] }, { status: 200 });
  }

  // Gemini APIを使用して応答を生成
  try {
    const { text: reply } = await generateText({
      model: google('gemini-2.0-flash-001'),
      prompt: `You are an expert developer assistant. When answering, keep the tone friendly but professional. Limit your answer to 3 sentences or fewer.

      Message from user:
      "${message}"

      Only answer if the question is about a tech stack or programming topic. 
      Otherwise, respond: "Sorry, I can only help with programming-related questions."`,
    });

    return Response.json({ success: true, reply }, { status: 200 });
  } catch (error) {
    console.error('Gemini API error:', error);
    return Response.json({ success: false, error: 'Failed to generate response.' }, { status: 500 });
  }
}
