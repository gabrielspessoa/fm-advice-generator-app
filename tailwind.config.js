module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          cyan: 'hsl(193, 38%, 86%)',
          green: 'hsl(150, 100%, 66%)',
        },
        neutral: {
          grayBlue: {
            500: 'hsl(217, 19%, 38%)',
            700: 'hsl(217, 19%, 24%)',
          },
          darkBlue: 'hsl(218, 23%, 16%)',
        },
      },
    },
  },
  plugins: [],
};
