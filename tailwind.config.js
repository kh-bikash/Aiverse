/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        danger: 'var(--color-danger)',
        surface: 'var(--color-surface)',
        text: 'var(--color-text)',
      },
      fontFamily: {
        display: ['Space Mono', 'monospace'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        neo: 'var(--shadow-neo)',
        'neo-inset': 'var(--shadow-neo-inset)',
        'neo-soft': 'var(--shadow-neo-soft)',
      },
      borderRadius: {
        neo: '8px',
      },
    },
  },
  plugins: [],
};
