export function ControlSlider({ label, value, min, max, step = 1, suffix = '', onChange }) {
  return (
    <label className="grid gap-2 rounded-neo p-3 shadow-neo-inset">
      <span className="flex items-center justify-between gap-3 font-mono text-xs font-bold text-text">
        {label}
        <span className="text-primary">
          {value}
          {suffix}
        </span>
      </span>
      <input
        className="h-2 accent-primary"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        aria-label={label}
      />
    </label>
  );
}
