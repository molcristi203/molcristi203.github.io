"use client"

import Image from "next/image";
import { useEffect, useRef } from "react";
import ExportedImage from "next-image-export-optimizer";

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
      <ExportedImage
        src={"images/banner.png"}
        alt="Abstract image containing colored semicircles and squares"
        width={500}
        height={500}
        id="banner"
        ref={parallaxRef}
        className="w-full h-screen object-cover box-content"
      />
    </div>
    );
}