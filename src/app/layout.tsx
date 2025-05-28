import type { Metadata } from "next";
import "./globals.css";
import { ttNorms } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Manual study case",
  description: "Manual FE study case",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ttNorms.className}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
