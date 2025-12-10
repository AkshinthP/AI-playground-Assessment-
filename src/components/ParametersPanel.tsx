import React from 'react';
import { useAppState } from '../context/AppStateContext';
import { Slider } from './ui/Slider';

export const ParametersPanel: React.FC = () => {
  const { parameters, setParameters } = useAppState();

  return (
    <div className="space-y-4">
      <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
        Parameters
      </h3>
      <div className="space-y-3">
        <Slider
          label="Temperature"
          min={0}
          max={1}
          step={0.05}
          value={parameters.temperature}
          onChange={(v) => setParameters({ ...parameters, temperature: v })}
        />
        <Slider
          label="Max tokens"
          min={64}
          max={2048}
          step={32}
          value={parameters.maxTokens}
          onChange={(v) => setParameters({ ...parameters, maxTokens: v })}
        />
      </div>
      <p className="text-[11px] leading-relaxed text-slate-400">
        Temperature controls creativity; max tokens limits response length.
      </p>
    </div>
  );
};
