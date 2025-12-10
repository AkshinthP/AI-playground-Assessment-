import React, { useState, type KeyboardEvent } from 'react';
import { useAppState } from '../context/AppStateContext';
import { Button } from './ui/Button';
import { Modal } from './ui/Modal';

export const PromptEditor: React.FC = () => {
  const {
    currentPrompt,
    setCurrentPrompt,
    sendPrompt,
    templates,
    loadingTemplates,
    templateError,
    applyTemplate,
  } = useAppState();

  const [showTemplates, setShowTemplates] = useState(false);

  const handleSend = () => {
    if (!currentPrompt.trim()) return;
    sendPrompt();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
          Prompt
        </h2>
        <span className="text-[11px] text-slate-400 dark:text-slate-500">
          Press Enter + Cmd/Ctrl to send
        </span>
      </div>

      {/* Prompt box – same style as response card */}
      <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <textarea
          value={currentPrompt}
          onChange={(e) => setCurrentPrompt(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Describe what you want the model to do…"
          className="min-h-[160px] w-full resize-none rounded-lg bg-transparent px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none dark:text-slate-50 dark:placeholder:text-slate-500"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex gap-2">
          <Button
            type="button"
            variant="secondary"
            onClick={() => setShowTemplates(true)}
          >
            Templates
          </Button>
        </div>
        <Button type="button" onClick={handleSend}>
          Send
        </Button>
      </div>

      {/* Templates modal */}
      <Modal
        title="Prompt templates"
        open={showTemplates}
        onClose={() => setShowTemplates(false)}
      >
        {loadingTemplates && (
          <p className="text-xs text-slate-500 dark:text-slate-300">
            Loading templates…
          </p>
        )}
        {templateError && (
          <p className="text-xs text-red-500 dark:text-red-400">
            {templateError}
          </p>
        )}
        {!loadingTemplates && !templateError && (
          <ul className="space-y-2">
            {templates.map((t) => (
              <li key={t.id}>
                <Button
                  variant="secondary"
                  className="w-full justify-between"
                  onClick={() => {
                    applyTemplate(t.id);
                    setShowTemplates(false);
                  }}
                >
                  <span className="text-left text-sm">{t.name}</span>
                </Button>
              </li>
            ))}
          </ul>
        )}
      </Modal>
    </div>
  );
};
