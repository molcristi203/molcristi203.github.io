"use client"

import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { forwardRef } from "react";
import { blippo } from "./fonts";

interface Props {
    title : string;
    backButton : boolean;
}

const SectionTitle = forwardRef<HTMLDivElement, Props>(
    function SectionTitle({title, backButton}, ref) {
    return (
        <div ref={ref} className="sm:p-8 p-4 bh-yellow text-white lg:text-5xl md:text-4xl sm:text-4xl text-2xl border-b-2 border-black flex flex-row flex-nowrap gap-2 items-center" data-navname={title}>
            <Link href="/"><ArrowLeftIcon className={`w-auto lg:h-12 md:h-9 sm:h-9 h-6 ${backButton ? "" : "hidden"}`}/></Link>
            <p className={`${blippo.variable} font-sans antialiased`}>{title}</p>
        </div>
    );
});

export default SectionTitle;