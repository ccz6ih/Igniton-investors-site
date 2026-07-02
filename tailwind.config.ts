import type { Config } from 'tailwindcss'

// Brand tokens mirror _theme_reference/assets/brand-tokens.css (the theme's single
// source of truth) — see docs/01_DESIGN_SYSTEM.md. Teal intentionally dropped.
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#121241',
        gold: '#B49153',
        'gold-bright': '#D3A23C',
        'off-white': '#F5F1EA',
        'cream-light': '#FFF8ED',
        'warm-gray': '#6B6660',
        hairline: '#E5E0D6',
        indigo: '#191880',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Playfair Display', 'serif'],
        body: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      letterSpacing: {
        eyebrow: '0.22em',
        label: '0.18em',
      },
      spacing: {
        'section-v': '7rem',
        'section-h': '3rem',
      },
      borderRadius: {
        card: '2px',
        section: '4px',
      },
      fontSize: {
        'fluid-hero': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'fluid-section': ['clamp(1.75rem, 4vw, 2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'fluid-subhead': ['clamp(1.25rem, 2.5vw, 1.75rem)', { lineHeight: '1.25' }],
      },
      keyframes: {
        'orb-drift': {
          '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)' },
          '50%': { transform: 'translate(-48%, -52%) scale(1.05)' },
        },
      },
      animation: {
        'orb-drift': 'orb-drift 14s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
