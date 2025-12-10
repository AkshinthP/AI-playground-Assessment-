import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
};

const baseClasses =
  'inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]';

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 shadow-sm',
  secondary:
    'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-50 dark:hover:bg-slate-600 shadow-sm',
  ghost:
    'bg-transparent text-slate-900 hover:bg-slate-100 dark:text-slate-50 dark:hover:bg-slate-800',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  className = '',
  ...props
}) => {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
  return <button className={classes} {...props} />;
};
