/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif']
    },
    extend: {
      backgroundImage:{
        "home": "url('https://github.com/SenisePedro/cardapio/blob/main/assets/bg.png?raw=true')"
      }
    },
  },
  plugins: [],
}

