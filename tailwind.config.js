/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        red: 'hsl(14, 86%, 42%)',
        green: 'hsl(159, 69%, 38%)',
        lightColor: 'hsl(20, 50%, 98%)', //rose 50
        bgBody: 'hsl(13, 31%, 94%)', //rose 100
        roseLight: 'hsl(14, 25%, 72%)', //rose 300
        roseMd: 'hsl(7, 20%, 60%)', //rose 400
        roseDark: 'hsl(12, 20%, 44%)', //rose 500
        darkColor: 'hsl(15, 41%, 11%)', //rose 900
        modalBg: 'rgba(0, 0, 0, 0.50)'

        
      },
      fontFamily: {
        'redTextRegular': ['RedTextRegular', 'sans-serif'],
        'redTextSemiBold': ['RedTextSemiBold', 'sans-serif'],
        'redTextBold': ['RedTextBold', 'sans-serif'],
      },
      fontSize: {
        '2.5': '2.5rem'
      },
      width: {
        '1440': '90rem',
        '50rem': '50rem',
        '37rem': '37rem'
      },
      gap: {
        '-1.375rem': '-1.375rem',
      },
      borderRadius: {
        '62.4375rem': '62.4375rem'
      }
    },
  },
  plugins: [],
}


