/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
				'ptsans': ['PT Sans Narrow', 'regular'],
				
			},
      spacing: {
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '5/5': '100%'
      },
      animation: {
        'spin-left': 'spin-left 8s linear infinite',
        'spin-right': 'spin-right 7s linear infinite',
        bounce: 'spin-right 1.5s cubic-bezier(.24,1.61,.27,.84) infinite'
      },
      keyframes: {
        'spin-left': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(-360deg)' }
        },
        'spin-right': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' }
        }        
      }
    },
  },
  plugins: [],
};
