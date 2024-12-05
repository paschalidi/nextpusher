import PusherServer from 'pusher';

export const pusherServer = new PusherServer({
  key: process.env.PUSHER_KEY!,
  secret: process.env.PUSHER_SECRET!,
  appId: process.env.NEXT_PUBLIC_PUSHER_APP_ID!,
  cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!,
  useTLS: true,
});

