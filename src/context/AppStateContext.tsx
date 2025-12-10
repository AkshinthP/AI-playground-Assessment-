import React, { createContext, useContext, useEffect, useState } from 'react';

export type Model = {
  id: string;
  name: string;
};

export type Template = {
  id: string;
  name: string;
  content: string;
};

export type Parameters = {
  temperature: number;
  maxTokens: number;
};

export type ChatMessage = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  createdAt: string;
};

type AppState = {
  models: Model[];
  templates: Template[];
  loadingModels: boolean;
  loadingTemplates: boolean;
  modelError: string | null;
  templateError: string | null;

  selectedModelId: string | null;
  parameters: Parameters;
  messages: ChatMessage[];
  currentPrompt: string;

  setCurrentPrompt: (value: string) => void;
  setSelectedModelId: (id: string) => void;
  setParameters: (p: Parameters) => void;
  sendPrompt: () => void;
  applyTemplate: (templateId: string) => void;
};

const AppStateContext = createContext<AppState | undefined>(undefined);

const createId = (): string =>
  typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2);

const generateMockResponse = (
  prompt: string,
  modelName: string,
  params: Parameters,
): string => {
  return [
    `Mock response from ${modelName}`,
    `(temperature=${params.temperature.toFixed(2)}, maxTokens=${params.maxTokens})`,
    '',
    `You said: "${prompt}"`,
    '',
    'This is only a simulated response for UI testing.',
  ].join('\n');
};

export const AppStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [models, setModels] = useState<Model[]>([]);
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loadingModels, setLoadingModels] = useState<boolean>(true);
  const [loadingTemplates, setLoadingTemplates] = useState<boolean>(true);
  const [modelError, setModelError] = useState<string | null>(null);
  const [templateError, setTemplateError] = useState<string | null>(null);

  const [selectedModelId, setSelectedModelIdState] = useState<string | null>(null);
  const [parameters, setParametersState] = useState<Parameters>({
    temperature: 0.7,
    maxTokens: 512,
  });
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentPrompt, setCurrentPrompt] = useState<string>('');

  // Fetch models from public/models.json
  useEffect(() => {
    const fetchModels = async () => {
      try {
        setLoadingModels(true);
        const res = await fetch('/models.json');
        if (!res.ok) throw new Error('Failed to load models');
        const data = (await res.json()) as Model[];
        setModels(data);
        if (data.length > 0) {
          setSelectedModelIdState(data[0].id);
        }
      } catch (err) {
        const message =
          err instanceof Error ? err.message : 'Unknown error loading models';
        setModelError(message);
      } finally {
        setLoadingModels(false);
      }
    };

    fetchModels();
  }, []);

  // Fetch templates from public/templates.json
  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        setLoadingTemplates(true);
        const res = await fetch('/templates.json');
        if (!res.ok) throw new Error('Failed to load templates');
        const data = (await res.json()) as Template[];
        setTemplates(data);
      } catch (err) {
        const message =
          err instanceof Error ? err.message : 'Unknown error loading templates';
        setTemplateError(message);
      } finally {
        setLoadingTemplates(false);
      }
    };

    fetchTemplates();
  }, []);

  const setSelectedModelId = (id: string) => {
    setSelectedModelIdState(id);
  };

  const setParameters = (p: Parameters) => {
    setParametersState(p);
  };

  const sendPrompt = () => {
    if (!currentPrompt.trim() || !selectedModelId) return;

    const model = models.find(m => m.id === selectedModelId);
    const modelName = model ? model.name : selectedModelId;

    const userMessage: ChatMessage = {
      id: createId(),
      role: 'user',
      content: currentPrompt.trim(),
      createdAt: new Date().toISOString(),
    };

    const assistantMessage: ChatMessage = {
      id: createId(),
      role: 'assistant',
      content: generateMockResponse(currentPrompt.trim(), modelName, parameters),
      createdAt: new Date().toISOString(),
    };

    setMessages(prev => [...prev, userMessage, assistantMessage]);
    setCurrentPrompt('');
  };

  const applyTemplate = (templateId: string) => {
    const template = templates.find(t => t.id === templateId);
    if (!template) return;
    setCurrentPrompt(template.content + ' ');
  };

  const value: AppState = {
    models,
    templates,
    loadingModels,
    loadingTemplates,
    modelError,
    templateError,
    selectedModelId,
    parameters,
    messages,
    currentPrompt,
    setCurrentPrompt,
    setSelectedModelId,
    setParameters,
    sendPrompt,
    applyTemplate,
  };

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = (): AppState => {
  const ctx = useContext(AppStateContext);
  if (!ctx) {
    throw new Error('useAppState must be used inside AppStateProvider');
  }
  return ctx;
};
