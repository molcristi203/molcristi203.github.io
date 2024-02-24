"use client"

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Banner() {
    const parallaxRef = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined' && parallaxRef.current) {
          import('simple-parallax-js').then(({ default: SimpleParallax }) => {
            if (parallaxRef.current) {
              new SimpleParallax(parallaxRef.current, {scale: 1.3});
            }
          });
        }
      }, []);

    return (
    <div className="w-full h-screen box-content border-b-2 border-black">
      <Image 
        src="/banner.png"
        width={2000}
        height={2000}
        alt="Banner picture"
        className="w-full h-screen object-cover box-content"
        id="banner"
        ref={parallaxRef}
      />
    </div>
    );
}