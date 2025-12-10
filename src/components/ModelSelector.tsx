import React from 'react';
import { useAppState } from '../context/AppStateContext';

export const ModelSelector: React.FC = () => {
  const {
    models,
    loadingModels,
    modelError,
    selectedModelId,
    setSelectedModelId,
  } = useAppState();

  if (loadingModels) {
    return <p className="text-xs text-slate-500">Loading models…</p>;
  }

  if (modelError) {
    return <p className="text-xs text-red-500">{modelError}</p>;
  }

  return (
    <label className="flex flex-col gap-1 text-xs text-slate-700 dark:text-slate-200">
      <span className="font-semibold">Model</span>
      <select
        className="rounded-md border border-slate-300 bg-white px-2 py-1 text-sm dark:bg-slate-800 dark:border-slate-600"
        value={selectedModelId ?? ''}
        onChange={(e) => setSelectedModelId(e.target.value)}
      >
        {models.map((m) => (
          <option key={m.id} value={m.id}>
            {m.name}
          </option>
        ))}
      </select>
    </label>
  );
};
