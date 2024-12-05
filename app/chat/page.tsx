import { Navbar } from '@/components/layout/navbar';
import { ChatInput } from '@/components/chat/chat-input';
import { ChatMessages } from '@/components/chat/chat-messages';
import { config } from "@/config";

export default async function ChatPage() {
  const res = await fetch(`${config.api_url}/api/messages`);
  console.info('res', res);
  const messages = await res.json();
  console.info('res', messages);

  // In a real app, this would come from authentication
  const currentUser = {
    id: '1',
    username: 'User' + Math.floor(Math.random() * 1000),
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar/>
      <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full">
        <ChatMessages
          initialMessages={messages}
          currentUserId={currentUser.id}
        />
        <ChatInput
          userId={currentUser.id}
          username={currentUser.username}
        />
      </div>
    </div>
  );
}

