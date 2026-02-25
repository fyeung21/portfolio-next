import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/header";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fiona Yeung | Portfolio",
  description: "Personal portfolio website of Fiona Yeung",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Header />
        <main className="font-sans">{children}</main>
      </body>
    </html>
  );
}
