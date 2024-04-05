/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-light": "#fafafa",
        darkslategray: "#2a373f",
        "light-solid-color-extra-card-background": "#fff",
        lavender: {
          "100": "#e9e7fd",
          "200": "#d9e2ff",
          "300": "rgba(207, 207, 227, 0.09)",
        },
        dark: "#23272e",
        mediumseagreen: {
          "100": "#1eb564",
          "200": "rgba(15, 173, 87, 0.16)",
          "300": "rgba(40, 199, 111, 0.16)",
        },
        "light-solid-color-success-success-500-base": "#28c76f",
        lightcyan: "#d5f7ff",
        teal: "#1a869e",
        bg: "#f3f5f8",
        lightcoral: {
          "100": "#ff8f8f",
          "200": "rgba(255, 151, 151, 0.16)",
          "300": "#f28b82",
        },
        chocolate: "#fa903e",
        mediumpurple: "#a676d0",
        grey: "#8b909a",
        primary: "#7879f1",
        "light-solid-color-extra-divider": "#dbdade",
        slateblue: "rgba(94, 97, 217, 0.09)",
        "light-solid-color-danger-danger-500-base": "#ea5455",
        mediumslateblue: "#0f60ff",
        "light-opacity-color-secondary-secondary-16":
          "rgba(168, 170, 174, 0.16)",
        "light-opacity-color-primary-primary-16": "rgba(115, 103, 240, 0.16)",
        "light-solid-color-primary-primary-500-base": "#7367f0",
        "iris-100": "#5d5fef",
        "light-grayscale-400": "#e8e8e8",
        "light-grayscale-200": "#585757",
        "light-red-base": "#e92c2c",
        midnightblue: "#1a379e",
        dodgerblue: "#0085ff",
        darkgray: {
          "100": "#969696",
          "200": "rgba(150, 150, 150, 0.16)",
        },
        orange: "#ff9f2d",
        limegreen: "#00ba34",
        gold: {
          "100": "#ffc600",
          "200": "rgba(255, 198, 0, 0.16)",
        },
        dimgray: "rgba(87, 89, 97, 0.09)",
        whitesmoke: {
          "100": "#f8f9fa",
          "200": "#f2f4f6",
        },
        silver: "rgba(201, 201, 201, 0.16)",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#e6d4d4",
        },
        indianred: {
          "100": "#e35454",
          "200": "rgba(204, 99, 99, 0.16)",
        },
        aliceblue: "#d8f3ff",
        deepskyblue: "#0fb7ff",
        lightsteelblue: "#bfc9e6",
        darkslateblue: "#2541a4",
        goldenrod: {
          "100": "#ecaa00",
          "200": "rgba(204, 148, 0, 0.16)",
        },
        olivedrab: "#6b9e1a",
        gray: "rgba(255, 255, 255, 0.3)",
        lightgoldenrodyellow: "#d5ffd6",
        ghostwhite: "#f3f3f9",
        mistyrose: {
          "100": "#ffe6e6",
          "200": "#e6cccc",
        },
        salmon: "#f46363",
        honeydew: "#dcf6e8",
        powderblue: "#c2decf",
        lavenderblush: "#ffeeee",
        lightblue: "#bfd9e6",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "light-basic-typography-paragraph": "'Public Sans'",
        inherit: "inherit",
      },
      borderRadius: {
        "6xs": "7px",
        "3xs": "10px",
        "81xl": "100px",
        "11xl": "30px",
        xl: "20px",
        "base-5": "15.5px",
        "9xs-3": "3.3px",
        "6xs-5": "6.5px",
        "71xl": "90px",
        "8xs": "5px",
      },
    },
    fontSize: {
      sm: "14px",
      mini: "15px",
      smi: "13px",
      xs: "12px",
      lg: "18px",
      "9xl": "28px",
      "3xl": "22px",
      "5xl": "24px",
      lgi: "19px",
      "2xs": "11px",
      xl: "20px",
      base: "16px",
      "xs-4": "11.4px",
      "3xs-8": "9.8px",
      "2xs-6": "10.6px",
      "mid-1": "17.1px",
      "sm-1": "13.1px",
      "13xl": "32px",
      "7xl": "26px",
      "5xs": "8px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
