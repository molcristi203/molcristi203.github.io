import Image from "next/image";
import Link from "next/link";
import { blippo } from "./fonts";

interface CardProps {
    title? : string;
    image_path? : string;
    link? : string;
    external_link? : boolean;
}

export function Card({ title, image_path, link, external_link } : CardProps) {
    const content = (
        <div className="flex flex-col items-center">
            <Image
                src={ image_path ? image_path : '/placeholder_image.jpg' }
                width={2000}
                height={2000}
                alt="Placeholder"
                className="w-full object-scale-down lg:h-[25vw] md:h-[50vw] sm:h-[100vw] h-[100vw]"
            />
            <h2 className={`lg:text-3xl md:text-2xl sm:text-3xl p-2 ${blippo.variable} font-sans antialiased`}>{title ? title : ""}</h2>
        </div>
    )

    return (
        external_link ?
        (<a href={link ? link : "#"} target="_blank">
            {content}
        </a> )
        :
        (<Link href={link ? link : "#"} scroll={true} className="bg-white">
            {content}
        </Link>)
    );
}