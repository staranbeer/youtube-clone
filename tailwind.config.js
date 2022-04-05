module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "font-sans"],
      },
      backgroundColor: {
        "youtube-900": "#181818",
        "youtube-800": "#212121",
        "youtube-600": "#373737",
        "youtube-500": "#4d4d4d",
      },
      colors: {
        "youtube-900": "#181818",
        "youtube-800": "#212121",
        "youtube-600": "#373737",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
