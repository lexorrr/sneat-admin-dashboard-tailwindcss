/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xxs: "400px",
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "992px",
      xlg: "1025px",
      xl: "1200px",
      xxl: "1600px",
    },
    dropShadow: {
      custom: "2px 0px 5px rgba(33, 33, 33, 0.2)",
    },
    colors: {
      brightGray: "#ECEFF1",
      solidBrandPrimary: "#1A1A66",
      white: "#FDFCFF",
      lotion: "#FAFAFA",
      charcoal: "#32475C",
      buttonBlue: "#2196F3",
      arsenic: "#414141",
      silverSand: "#C4C4C4",
      yaleBlue: "#0D47A1",
      gray11: "#BDBDBD",
      japaneseIndigo: "#2A364E",
      lust: "#E31A1C",
      cultured: "#F5F5F9",
      charcoalAlpha22: "rgba(50, 71, 92, 0.22)",
      charcoalAlpha60: "rgba(50, 71, 92, 0.6)",
      charcoalAlpha12: "rgba(50, 71, 92, 0.12)",
      charcoalAlpha87: "rgba(50, 71, 92, 0.87)",
      charcoalAlpha50: "rgba(50, 71, 92, 0.5)",
      charcoalAlpha38: "rgba(50, 71, 92, 0.38)",
      charcoalAlpha68: "rgba(50, 71, 92, 0.68)",
      charcoalAlpha4: "rgba(50, 71, 92, 0.04)",
      veryLightBlue: "#696CFF",
      veryLightBlueApha12: "rgba(102, 108, 255, 0.12)",
      coolGrey: "#8592A3",
      coolGreyAlpha50: "rgba(109, 120, 141, 0.5)",
      ghostWhite: "#FAFAFC",
      kiwi: "#71DD37",
      kiwiAlpha12: "rgba(114, 225, 40, 0.12)",
      tartOrange: "#FF4D49",
      tartOrangeAlpha12: "rgba(255, 77, 73, 0.12)",
      orangeYellow: "#FDB528",
      orangeYellowAlpha12: "rgba(253, 181, 40, 0.12)",
      spiroDiscoBall: "#26C6F9",
      spiroDiscoBallAlpha12: "rgba(38, 198, 249, 0.12)",
    },
    fontFamily: {
      notoSans: ["Noto Sans", "sans-serif"],
      openSans: ["Open Sans", "sans-serif"],
      publicSans: ["Public Sans", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    boxShadow: {
      custom: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      formButtonCustom:
        "0px 1px 6px 2px rgba(50, 71, 92, 0.06), 0px 2px 6px 1px rgba(50, 71, 92, 0.04), 0px 1px 4px 2px rgba(50, 71, 92, 0.02)",
      sideNavCustom:
        "0px 1px 6px 2px rgba(50, 71, 92, 0.06), 0px 2px 6px 1px rgba(50, 71, 92, 0.04), 0px 1px 4px 2px rgba(50, 71, 92, 0.02)",
      headerNavCustom:
        "0px 1px 3px 2px rgba(50, 71, 92, 0.06), 0px 2px 5px 1px rgba(50, 71, 92, 0.04), 0px 1px 3px 2px rgba(50, 71, 92, 0.02)",
      bodyCustom:
        "0px 2px 9px rgba(50, 71, 92, 0.06), 0px 4px 9px 1px rgba(50, 71, 92, 0.04), 0px 2px 6px 4px rgba(50, 71, 92, 0.02)",
      cardCustom:
        "0px 2px 9px rgba(50, 71, 92, 0.06), 0px 4px 9px 1px rgba(50, 71, 92, 0.04), 0px 2px 6px 4px rgba(50, 71, 92, 0.02)",
      buttonCustom:
        "0px 1px 6px 2px rgba(50, 71, 92, 0.06), 0px 2px 6px 1px rgba(50, 71, 92, 0.04), 0px 1px 4px 2px rgba(50, 71, 92, 0.02)",
      tableSectionCustom:
        "0px 2px 9px rgba(50, 71, 92, 0.06), 0px 4px 9px 1px rgba(50, 71, 92, 0.04), 0px 2px 6px 4px rgba(50, 71, 92, 0.02)",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
