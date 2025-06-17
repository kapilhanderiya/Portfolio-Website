// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
      },
      colors: {
        background: '#0F0F1B',
        textPrimary: '#F8F8F8',
        textSecondary: '#A9ADC1',
        accentPink: '#FF007F',
        accentCyan: '#00FFF7',
        neonYellow: '#FFE600',
        borderDark: '#2D2D44',
      },
      dropShadow: {
        neonPink: '0 0 6px #FF007F',
        neonCyan: '0 0 6px #00FFF7',
      },
      boxShadow: {
        neonPulse: '0 0 20px #FF007F, 0 0 40px #FF007F',
      },
      rotate: {
        'y-6': 'rotateY(6deg)',
        'x-3': 'rotateX(3deg)',
      },
      animation: {
        flicker: 'flicker 3s infinite',
        pulseSlow: 'pulse 4s infinite',
        pulseGlow: 'pulseGlow 2s infinite ease-in-out',
        'spin-slow': 'spin 5s linear infinite',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 10px #FF007F, 0 0 20px #FF007F',
          },
          '50%': {
            boxShadow: '0 0 20px #FF007F, 0 0 40px #FF007F',
          },
        },
      },
    },
  },
  plugins: [],
};
