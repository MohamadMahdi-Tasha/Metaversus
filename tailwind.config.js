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
              "my-blue": '#25618B',
          },
          maxWidth: {"page-holder": "1150px"},
          fontFamily: {"primary" : ['Eudoxus', 'sans-serif'],},
          animation: {'spin-slow': 'spin 5s linear infinite',},
          backgroundImage: {
              'home-bg': "url('/src/assets/img/img-bg.png')",
              'pink-gradiant': 'url("/src/assets/img/eighthSection/left-side-bg.png")'
          }
      },
  },
  plugins: [],
}