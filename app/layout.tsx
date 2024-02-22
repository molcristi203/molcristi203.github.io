import type { Metadata } from "next";
import "./globals.css";
import { blippo } from "./fonts";
import Banner from "./banner";

export const metadata: Metadata = {
  title: "Portofoliu"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${blippo.variable} font-sans antialiased`}>
        <Banner/>
        {children}
        <div className="bh-yellow h-14 border-t-2 border-black flex flex-row gap-8 p-8 items-center text-white text-2xl">
          <a href="https://www.linkedin.com/in/cristi-moldovan-8a199026b" target="_blank">LinkedIn</a>
          <a href="https://github.com/molcristi203" target="_blank">GitHub</a>
          <a href="https://www.artstation.com/molcristi" target="_blank">ArtStation</a>
        </div>
      </body>
    </html>
  );
}
