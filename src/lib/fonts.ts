import localFont from "next/font/local";

const nunito = localFont({
  src: [
    {
      path: "../../public/assets/fonts/Nunito/Nunito-VariableFont_wght.ttf",
      style: "normal",
      weight: "100 900",
    },
    {
      path: "../../public/assets/fonts/Nunito/Nunito-Italic-VariableFont_wght.ttf",
      style: "italic",
      weight: "100 900",
    },
  ],
  variable: "--font-nunito",
  display: "swap",
  fallback: ["system-ui", "Arial"],
});

const nunitoSans = localFont({
  src: [
    {
      path: "../../public/assets/fonts/Nunito_Sans/NunitoSans-VariableFont_YTLC,opsz,wdth,wght.ttf",
      style: "normal",
      weight: "200 1000",
    },
    {
      path: "../../public/assets/fonts/Nunito_Sans/NunitoSans-Italic-VariableFont_YTLC,opsz,wdth,wght.ttf",
      style: "italic",
      weight: "200 1000",
    },
  ],
  variable: "--font-nunito-sans",
  display: "swap",
  fallback: ["system-ui", "Arial"],
});

export { nunito, nunitoSans };
