const pxToRem = (num) => `${num / 16}rem`;

module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./safelist.txt",
  ],
  darkMode: false,
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1640px",
      display: "2100px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      offwhite: "#FBFAF6",
      black: "#0D0D0D",
      lightBlack: "#1D1D1D",
      blue: "#2400FF",
      orange: "#FF9900",
      pink: "#FF008A",
    },
    fontSize: {
      10: [pxToRem(10), pxToRem(14)],
      14: [pxToRem(14), pxToRem(18)],
      16: [pxToRem(16), pxToRem(22)],
      24: [pxToRem(24), pxToRem(32)],
      40: [pxToRem(40), pxToRem(48)],
      50: [pxToRem(50), pxToRem(58)],
      62: [pxToRem(62), pxToRem(72)],
      120: [pxToRem(120), pxToRem(120)],
    },
    lineHeight: {
      none: "1",
      tight: "1.2",
      snug: "1.3",
      normal: "1.375",
      relaxed: "1.5",
      loose: "2",
    },
    extend: {
      fontFamily: {
        sans: "strawford",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line global-require
    require("tailwind-safelist-generator")({
      patterns: [
        "w-1/12",
        "{screens}:w-1/12",
        "w-2/12",
        "{screens}:w-2/12",
        "w-3/12",
        "{screens}:w-3/12",
        "w-4/12",
        "{screens}:w-4/12",
        "w-5/12",
        "{screens}:w-5/12",
        "w-6/12",
        "{screens}:w-6/12",
        "w-7/12",
        "{screens}:w-7/12",
        "w-8/12",
        "{screens}:w-8/12",
        "w-9/12",
        "{screens}:w-9/12",
        "w-10/12",
        "{screens}:w-10/12",
        "w-11/12",
        "{screens}:w-11/12",
        "w-full",
        "{screens}:w-full",
      ],
    }),
  ],
};
