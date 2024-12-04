/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgGalaxy: "url('/assets/images/CvUps88EkrguHSS3tz7nwyNDxQ.png.png')",
        bottomfooterBg: "url('/assets/images/Vector.png')",
        test: "url('/assets/images/Vectorbtn.svg)",
      },
      boxShadow: {
        custom: "1px 12px 0px #A1A1A1", // Customize as needed
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".mask-folder1": {
          "-webkit-mask-image": "url('/assets/images/Vector2.png')",
          "mask-image": "url('/assets/images/Vector2.png')",
          "-webkit-mask-repeat": "no-repeat",
          "mask-repeat": "no-repeat",
          "-webkit-mask-size": "contain",
          "mask-size": "contain",
        },
        ".mask-folder2": {
          "-webkit-mask-image": "url('/assets/images/Vector3.png')",
          "mask-image": "url('/assets/images/Vector3.png')",
          "-webkit-mask-repeat": "no-repeat",
          "mask-repeat": "no-repeat",
          "-webkit-mask-size": "100% 100%", // Scales the mask to match the parent container
          "mask-size": "100% 100%",
        },
      });
    }),
  ],
};
