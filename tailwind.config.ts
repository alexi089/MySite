import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink:    '#0d0d0d',
        white:  '#f8f7f4',
        warm:   '#f0ede6',
        void:   '#090909',
        accent: '#2a5cff',
      },
      fontFamily: {
        display:   ['var(--font-syne)', 'sans-serif'],
        editorial: ['var(--font-cormorant)', 'serif'],
        body:      ['var(--font-dm-sans)', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.2em',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-0.3deg)' },
          '50%':      { transform: 'translateY(-10px) rotate(0.3deg)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
