import type { Metadata } from "next";
//import { Inter } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EGB",
  description: "Portfolio website",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" sizes="48x48" />
        </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
