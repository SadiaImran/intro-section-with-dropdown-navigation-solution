/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors : {
        "intro-almost-white": "#fafafa",
        "intro-medium-gray": "#696969",
        "intro-almost-black": "#141414",
      }
    },
    fontFamily : {
      Epilogue : [ "Epilogue", "sans-serif"]
    },
    fontSize :{
      "Paragraph" : ["18px"]
    },
    container : {
      center : true ,
      padding : "1rem",
      screens :{
        lg : "1124px" ,
        xl : "1124px" , 
        "2xl" : "1124px",
      }
    }
    
  },
  plugins: [],
}

