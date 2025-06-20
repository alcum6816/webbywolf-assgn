module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          accent: "var(--bg-accent)",
          accentLight: "var(--bg-accent-light)",
          accentDark: "var(--bg-accent-dark)",
          lightBlue: "var(--bg-light-blue)",
          grayLight: "var(--bg-gray-light)",
          grayLighter: "var(--bg-gray-lighter)",
          grayLightest: "var(--bg-gray-lightest)",
          neutral: "var(--bg-neutral)",
          offWhite: "var(--bg-off-white)",
          gray: "var(--bg-gray)",
          black: "var(--bg-black)",
          whiteTransparent: "var(--bg-white-transparent)"
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          accent: "var(--text-accent)",
          accentDark: "var(--text-accent-dark)",
          accentDarker: "var(--text-accent-darker)",
          dark: "var(--text-dark)",
          slate: "var(--text-slate)",
          gray: "var(--text-gray)",
          grayLight: "var(--text-gray-light)",
          grayMedium: "var(--text-gray-medium)",
          grayDark: "var(--text-gray-dark)",
          white: "var(--text-white)"
        },
        footer: {
          background: "var(--footer-bg)"
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        figtree: ['Figtree', 'sans-serif']
      }
    }
  },
  plugins: []
};