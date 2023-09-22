/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'BC-yellow': '#FFEC00',
        'BC-blue': '#0039A6',
        'BC-purple': '#5000FF',
        'BC-cyan': '#5EEFE1',
        'BC-background': '#EAEFF3',
        'BC-white': '#FFFFFF',
      },
      fontFamily: {
        body: ['Ubuntu'],
      },
    },
  },

  plugins: [],
};
