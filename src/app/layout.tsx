import type { Metadata } from "next";
import { League_Spartan } from "next/font/google"
import "./globals.css";

const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vinnance",
  description: "Agile way to control your finances",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={leagueSpartan.className}>{children}</body>
    </html>
  );
}
