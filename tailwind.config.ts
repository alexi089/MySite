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
        ink:     '#1C1714',   // warm near-black
        white:   '#F2EDE4',   // parchment (Shopify Winter bg)
        warm:    '#E8E2D6',   // slightly deeper parchment
        void:    '#0F0D0B',   // deep warm black
        accent:  '#5340C1',   // Renaissance purple
        gold:    '#B8976A',   // muted warm gold
        muted:   '#7A6F68',   // warm gray for secondary text
        'purple-light': '#8B7DE0', // lighter purple for dark sections
      },
      fontFamily: {
        display:   ['var(--font-syne)', 'sans-serif'],
        editorial: ['var(--font-cormorant)', 'serif'],
        body:      ['var(--font-dm-sans)', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.2em',
        wide:    '0.12em',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-0.3deg)' },
          '50%':      { transform: 'translateY(-10px) rotate(0.3deg)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrollLine: {
          '0%, 100%': { transform: 'scaleY(1)', opacity: '1' },
          '50%':      { transform: 'scaleY(0.3)', opacity: '0.3' },
        },
      },
      animation: {
        float:       'float 7s ease-in-out infinite',
        marquee:     'marquee 24s linear infinite',
        'scroll-line': 'scrollLine 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
