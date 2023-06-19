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
          colors: {
              "theme-color" : '#1A232E',
              "my-grey": 'rgba(199,199,199,.5)',
          },
          maxWidth: {"page-holder": "1150px"},
          fontFamily: {"primary" : ['Eudoxus', 'sans-serif'],},
          animation: {'spin-slow': 'spin 5s linear infinite',},
      },
  },
  plugins: [],
}