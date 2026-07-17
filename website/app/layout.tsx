import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LiftUp – Digitale Präsenz für kleine und mittelständische Unternehmen",
  description:
    "LiftUp entwickelt digitale Auftritte für kleine und mittelständische Unternehmen – mit modernen Websites, besserer Sichtbarkeit und laufender Betreuung.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
