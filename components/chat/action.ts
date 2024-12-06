'use server'

import { pusherServer } from "@/lib/pusher";

export const sendIt = async (userId: string, username: string, content: string) => {
  try {
    const message = {
      id: Date.now().toString(),
      content,
      userId,
      username,
      createdAt: new Date().toISOString(),
    };

    // Trigger Pusher event directly
    await pusherServer.trigger('chat', 'new-message', message);

    return { success: true };
  } catch (error) {
    console.error('Error sending message:', error);
    throw new Error('Failed to send message');
  }
}