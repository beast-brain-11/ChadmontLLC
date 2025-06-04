/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
        gray: {
          50: '#f9fafb',  // Very light gray, almost white
          100: '#f3f4f6', // Light gray
          200: '#e5e7eb', // 
          300: '#d1d5db', // 
          400: '#9ca3af', // Medium gray
          500: '#6b7280', // 
          600: '#4b5563', // Dark gray
          700: '#374151', // 
          800: '#1f2937', // Very dark gray
          900: '#111827', // Almost black
        },
        gold: {
          DEFAULT: '#FFD700', // Standard gold
          light: '#FFEC8B',  // Lighter gold
          dark: '#B8860B',   // Darker gold / antique gold
          pale: '#FFF8DC',   // Pale gold for subtle accents
          bright: '#FFDF00', // Bright gold for highlights
          30: 'rgba(255, 215, 0, 0.3)', // Custom opacity for gold
        },
        futuristic: {
          cyan: '#00FFFF',
          gradient: 'linear-gradient(135deg, #111827 0%, #FFD700 100%)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #FFD700' },
          '100%': { boxShadow: '0 0 20px #FFD700, 0 0 30px #FFD700' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'bwg-gradient': 'linear-gradient(135deg, theme(\'colors.gray.900\') 0%, theme(\'colors.gray.600\') 100%)',
        'gold-accent-gradient': 'linear-gradient(45deg, theme(\'colors.gray.800\'), theme(\'colors.gray.700\'), theme(\'colors.gold.dark\'))',
        'subtle-gold-gradient': 'linear-gradient(to right, theme(\'colors.gray.800\'), theme(\'colors.gray.900\'), theme(\'colors.gold.DEFAULT\'))',
        'futuristic-gradient': 'linear-gradient(135deg, theme(\'colors.black\'), theme(\'colors.gold.DEFAULT\'))',
        'gold-shimmer': 'linear-gradient(45deg, theme(\'colors.gold.dark\'), theme(\'colors.gold.DEFAULT\'), theme(\'colors.gold.light\'), theme(\'colors.gold.DEFAULT\'), theme(\'colors.gold.dark\'))',
      },
    },
  },
  plugins: [],
        }
    
