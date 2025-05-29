import type { Metadata } from "next";
import "./globals.css";
import { Press_Start_2P, Handjet, Chakra_Petch } from 'next/font/google';


export const metadata: Metadata = {
  title: "Habsa",
  description: "Habsa's Portfolio",
};


const pressStart = Press_Start_2P({ 
  subsets: ['latin'], 
  weight: '400',
  variable: '--font-press-start-2p' 
});

const handjet = Handjet({
  subsets: ['latin'],
  variable: '--font-handjet'
});

const chakraPetch = Chakra_Petch({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-chakra'
});

export default function RootLayout({ 
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pressStart.variable} ${handjet.variable} ${chakraPetch.variable}`}>
      <body>{children}</body>
    </html>
  );
}