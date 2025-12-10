import React from 'react';
import { ThemeToggle } from './components/ThemeToggle';
import { ModelSelector } from './components/ModelSelector';
import { ParametersPanel } from './components/ParametersPanel';
import { PromptEditor } from './components/PromptEditor';
import { ChatPanel } from './components/ChatPanel';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-6 px-4 py-6 md:px-6 md:py-8">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-slate-200 pb-4 dark:border-slate-800">
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold tracking-tight">
              AI Playground
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Experiment with models, parameters, and prompts in a focused UI.
            </p>
          </div>
          <ThemeToggle />
        </header>

        {/* Main layout */}
        <main className="flex flex-1 flex-col gap-4 md:flex-row md:gap-6">
          {/* Sidebar */}
          <aside className="w-full space-y-5 rounded-xl border border-slate-200 bg-white p-4 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-900 md:w-72 md:p-5">
            <div className="space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                Setup
              </p>
              <ModelSelector />
            </div>
            <div className="h-px w-full bg-slate-200 dark:bg-slate-800" />
            <ParametersPanel />
          </aside>

          {/* Main content */}
          <section className="flex min-h-[420px] flex-1 flex-col gap-4">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-5">
              <PromptEditor />
            </div>
            <div className="flex-1 rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-5">
              <ChatPanel />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
