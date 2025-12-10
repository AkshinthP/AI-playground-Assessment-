import React from 'react';
import { useAppState } from '../context/AppStateContext';
import { ChatBubble } from './ui/ChatBubble';
import { Button } from './ui/Button';

export const ChatPanel: React.FC = () => {
  const { messages } = useAppState();

  const copyLastResponse = async () => {
    const last = [...messages].reverse().find((m) => m.role === 'assistant');
    if (last) {
      await navigator.clipboard.writeText(last.content);
      alert('Response copied to clipboard');
    }
  };

  const downloadConversation = () => {
    const blob = new Blob([JSON.stringify(messages, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'conversation.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex h-full flex-col gap-3">
      <div className="flex-1 space-y-3 overflow-auto rounded-lg border border-slate-200 bg-slate-50 p-3 dark:bg-slate-900 dark:border-slate-700">
        {messages.length === 0 && (
          <p className="text-xs text-slate-500">
            Start by entering a prompt and clicking Send. Responses will appear here.
          </p>
        )}
        {messages.map((m) => (
          <ChatBubble key={m.id} role={m.role} content={m.content} />
        ))}
      </div>
      <div className="flex justify-end gap-2">
        <Button
          variant="secondary"
          type="button"
          onClick={copyLastResponse}
        >
          Copy last response
        </Button>
        <Button
          variant="secondary"
          type="button"
          onClick={downloadConversation}
        >
          Download JSON
        </Button>
      </div>
    </div>
  );
};
