import Image from "next/image";
import Link from "next/link";
import { blippo } from "./fonts";

interface CardProps {
    title? : string;
    image_path? : string;
    link? : string;
}

export function Card({ title, image_path, link } : CardProps) {
    return (
        <Link href={link ? link : "#"} scroll={true} className="bg-white">
            <div className="flex flex-col items-center">
                <Image
                    src={ image_path ? image_path : '/molcristi203.github.io/placeholder_image.jpg' }
                    width={2000}
                    height={2000}
                    alt="Placeholder"
                    className="w-full object-scale-down lg:h-[25vw] md:h-[50vw] sm:h-[100vw] h-[100vw]"
                />
                <h2 className={`lg:text-3xl md:text-2xl sm:text-3xl p-2 ${blippo.variable} font-sans antialiased`}>{title ? title : ""}</h2>
            </div>
        </Link>    
    );
}