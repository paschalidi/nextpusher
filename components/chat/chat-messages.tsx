'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { pusherClient } from "@/lib/pusher/pusherClient";

export interface Message {
  id: string;
  content: string;
  userId: string;
  username: string;
  createdAt: string;
}

interface ChatMessagesProps {
  initialMessages: Message[];
  currentUserId: string;
}

export function ChatMessages({ initialMessages, currentUserId }: ChatMessagesProps) {
  const messagesRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  useEffect(() => {
    const channel = pusherClient.subscribe('chat');

    channel.bind('new-message', (message: Message) => {
      setMessages((current) => [...current, message]);
    });

    return () => {
      pusherClient.unsubscribe('chat');
    };
  }, []);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div ref={messagesRef} className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={cn(
            'flex flex-col max-w-[70%] space-y-1',
            message.userId === currentUserId ? 'ml-auto items-end' : 'items-start'
          )}
        >
          <span className="text-xs text-muted-foreground">
            {message.username}
          </span>
          <div
            className={cn(
              'rounded-lg px-4 py-2',
              message.userId === currentUserId
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted'
            )}
          >
            {message.content}
          </div>
        </div>
      ))}
    </div>
  );
}