/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      
      fontFamily:{
        'mons1' : ['Montserrat', 'sans-serif'],
        'mons2' : ['"Montserrat Subrayada"', 'sans-serif'],
        'poppin' : ['Poppins', 'sans-serif'],
      },
      keyframes: {
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        }
    },
    animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out'
    },
    colors : {
      'semiwhite' : '#FCF6F5',
    }
    },
  },
  plugins: [],
}
