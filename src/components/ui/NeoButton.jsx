export function NeoButton({ children, variant = 'secondary', className = '', ...props }) {
  const tone =
    variant === 'primary'
      ? 'bg-primary text-secondary hover:bg-primary/95'
      : 'bg-surface text-text hover:text-primary';

  return (
    <button
      className={`neo-button inline-flex min-h-11 items-center justify-center gap-2 px-5 py-3 text-sm font-bold ${tone} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
