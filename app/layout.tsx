import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PitchIQ — Think Faster. Play Smarter.",
  description: "Personalized football development for the modern midfielder.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
