"use client"

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Banner() {
    const parallaxRef = useRef(null);

    useEffect(() => {
        // Check if window is defined (running on the client side)
        if (typeof window !== 'undefined' && parallaxRef.current) {
          import('simple-parallax-js').then(({ default: SimpleParallax }) => {
            // Ensure parallaxRef.current is not null before creating the SimpleParallax instance
            if (parallaxRef.current) {
              new SimpleParallax(parallaxRef.current, {scale: 1.3});
            }
          });
        }
      }, []);

    return (
    <Image 
        src="/banner.png"
        width={2000}
        height={2000}
        alt="Banner picture"
        className="w-full h-screen object-cover"
        id="banner"
        ref={parallaxRef}
      />
    );
}