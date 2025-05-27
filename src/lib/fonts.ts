import localFont from "next/font/local";

export const ttNormsSerif = localFont({
  src: [
    {
      path: "../fonts/TT Norms Pro Serif Trial Normal.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/TT Norms Pro Serif Trial Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-tt-norms-serif",
  display: "swap",
  preload: true,
  fallback: ["serif"],
});
