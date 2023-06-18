// Codes By Mahdi Tasha
// Confining TailwindCSS files
export default {
  content: [
      './index.html',
      './src/*.{ts,tsx}',
      './src/**/*.{ts,tsx}'
  ],
  theme: {
      extend: {
          colors: {"theme-color" : '#1A232E'},
          maxWidth: {"page-holder": "1150px"}
      },
  },
  plugins: [],
}

