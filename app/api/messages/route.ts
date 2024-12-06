import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

let messages: any[] = [];

export async function GET() {
  try {
    return NextResponse.json(messages);
  } catch (error) {
    console.error('[MESSAGES_GET]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}