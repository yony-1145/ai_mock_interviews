import { generateText } from 'ai';
import { google } from '@ai-sdk/google';
import { NextResponse } from 'next/server';

// This route is used to prewarm the Google Gemini model
export async function GET() {
  try {
    await generateText({
      model: google('gemini-2.0-pro'),
      prompt: 'Hi!',
    });
    return NextResponse.json({ success: true, message: 'Model prewarmed successfully' });
  } catch (error) {
    console.error('Prewarm error:', error);
    return NextResponse.json({ success: false, error: 'Prewarm failed' }, { status: 500 });
  }
}