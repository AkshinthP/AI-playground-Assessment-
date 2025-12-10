import React from 'react';

type SliderProps = {
  label: string;
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
};

export const Slider: React.FC<SliderProps> = ({
  label,
  min,
  max,
  step = 0.1,
  value,
  onChange,
}) => {
  return (
    <label className="flex flex-col gap-1 text-sm text-slate-700 dark:text-slate-200">
      <div className="flex justify-between">
        <span>{label}</span>
        <span className="tabular-nums">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-indigo-600"
      />
    </label>
  );
};
