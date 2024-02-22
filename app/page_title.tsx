"use client"

import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";

interface Props {
    title : string;
}

const PageTitle = forwardRef<HTMLDivElement, Props>(({ title }, ref) => {
    const path = usePathname();

    return (
        <div ref={ref} className="p-8 bh-yellow text-white text-5xl border-b-2 border-t-2 border-black flex flex-row flex-nowrap gap-2 items-center" data-navname={title}>
            <Link href="/"><ArrowLeftIcon className={`w-auto h-12 ${path === "/" ? "hidden" : ""}`}/></Link>
            <p>{title}</p>
        </div>
    );
});

export default PageTitle;

// export default function PageTitle({ title } : Props) {
//     const path = usePathname();
//     return (
//         <div className="p-8 bh-yellow text-white text-5xl border-b-2 border-t-2 border-black flex flex-row flex-nowrap gap-2 items-center">
//             <Link href="/"><ArrowLeftIcon className={`w-auto h-12 ${path === "/" ? "hidden" : ""}`}/></Link>
//             <p>{title}</p>
//         </div>
//     );
// }