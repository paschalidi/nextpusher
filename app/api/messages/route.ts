import { NextResponse } from 'next/server';
import { pusherServer } from '@/lib/pusher';

export const dynamic = 'force-dynamic';

let messages: any[] = [];

export async function POST(req: Request) {
  try {
    const { content, userId, username } = await req.json();
    const message = {
      id: Date.now().toString(),
      content,
      userId,
      username,
      createdAt: new Date().toISOString(),
    };

    try {
      await pusherServer.trigger('chat', 'new-message', message);
    } catch (pusherError) {
      console.error('Pusher error:', pusherError);
      return new NextResponse('Pusher Error', { status: 500 });
    }

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error('[MESSAGES_POST]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function GET() {
  try {
    return NextResponse.json(messages);
  } catch (error) {
    console.error('[MESSAGES_GET]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}