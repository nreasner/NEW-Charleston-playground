/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        sand: { 50:'#fefdf8',100:'#fdf9e8',200:'#faf0c8',300:'#f5e3a0',400:'#efd175',500:'#e8bc4a' },
        marsh: { 50:'#f0f7f1',100:'#dcedde',200:'#bcdcc0',300:'#8fc397',500:'#3d884d',600:'#2d6d3b',700:'#255731',800:'#204629',900:'#1b3a23' },
        ocean: { 50:'#f0f8fc',100:'#dceef8',200:'#bfe0f2',400:'#5fb1dc',600:'#2c79ad' },
        coral: { 50:'#fff5f2',100:'#ffe8e1',200:'#ffd5c8',400:'#ff8f6b',500:'#f96b3d',600:'#e6501f' },
        palmetto: { 100:'#e6f2dc',500:'#6fa245',600:'#568133' },
      },
      fontFamily: {
        display: ["'Lilita One'", 'cursive'],
        body: ["'Nunito'", 'sans-serif'],
        accent: ["'Caveat'", 'cursive'],
      },
    },
  },
  plugins: [],
};
