import localFont from "next/font/local";

export const ttNorms = localFont({
  src: "../fonts/TTNorms-Medium.otf",
  variable: "--font-tt-norms",
  display: "swap",
  preload: true,
  fallback: ["sans-serif"],
});
