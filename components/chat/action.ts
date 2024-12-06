'use server'

import { config } from "@/config";

export const sendIt = async (userId: string, username: string, content: string) => {
  console.info(`@@@@@${config.api_url}/api/messages`)
  const res = await fetch(`${config.api_url}/api/messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      content,
      userId,
      username,
    }),
  });

  if (!res.ok) {
    throw new Error('Failed to send message');
  }
}