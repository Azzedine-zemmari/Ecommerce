// @type {import('tailwindcss').Config}
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateRows: {
        '16': 'repeat(16, minmax(0, 1fr))',

        'layout': '200px minmax(900px, 1fr) 100px',
      },
      
      colors: {
        primary_AL: '#FC6736',
        secondary_AL: '#E95555',
        accent: '',
      },
      
    },
  },
  plugins : [],
}