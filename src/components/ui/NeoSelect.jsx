import { ChevronDown } from 'lucide-react';

export function NeoSelect({ label, value, options, onChange, compact = false }) {
  return (
    <label className={`relative grid gap-1 ${compact ? 'min-w-40' : ''}`}>
      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-text/60">{label}</span>
      <span className="neo-inset relative flex items-center">
        <select
          className="w-full appearance-none bg-transparent px-3 py-2.5 pr-9 font-mono text-xs font-bold text-primary outline-none"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          aria-label={label}
        >
          {options.map((option) => {
            const optionValue = typeof option === 'string' ? option : option.id;
            const optionLabel = typeof option === 'string' ? option : option.label || option.name;
            return (
              <option key={optionValue} value={optionValue}>
                {optionLabel}
              </option>
            );
          })}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 text-primary" aria-hidden="true" size={15} />
      </span>
    </label>
  );
}
