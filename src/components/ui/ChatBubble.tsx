import React from 'react';

type ChatBubbleProps = {
  role: 'user' | 'assistant';
  content: string;
};

export const ChatBubble: React.FC<ChatBubbleProps> = ({ role, content }) => {
  const isUser = role === 'user';

  return (
    <div className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-xl whitespace-pre-wrap rounded-xl px-3 py-2 text-sm shadow-sm ${
          isUser
            ? 'rounded-br-md bg-indigo-600 text-white'
            : 'rounded-bl-md bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-50'
        }`}
      >
        {content}
      </div>
    </div>
  );
};
