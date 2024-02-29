import type { Metadata } from "next";
import "./globals.css";
import { lobster } from "./fonts";
import Banner from "./banner";

export const metadata: Metadata = {
  title: "Portfolio"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${lobster.className} antialiased`}>
        <Banner/>
        {children}
        <div className="bh-yellow lg:h-28 md:h-28 sm:h-28 h-14 border-b-2 border-black text-[#222]">
        </div>
      </body>
    </html>
  );
}
