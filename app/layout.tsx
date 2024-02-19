import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/Header";

const myFont = localFont({
  src: "../assets/Chillax-Variable.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nique Restaurant",
  description: "The pure taste of Thailand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className=" bg-brand-black text-brand-white !scroll-smooth selection:bg-brand-accent"
    >
      <body className={myFont.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
