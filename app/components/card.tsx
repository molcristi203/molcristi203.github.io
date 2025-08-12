import Link from "next/link";
import { blippo } from "@/app/fonts";
import { CustomImage } from "./custom_image";

interface CardProps {
    title? : string;
    image_path : string;
    link? : string;
    external_link? : boolean;
    alt : string;
}

export function Card({ title, image_path, link, external_link, alt } : CardProps) {
    const content = (
        <div className="flex flex-col items-center">
            <CustomImage
                src={image_path}
                alt={alt}
                key={0}
                additional_classes="lg:h-[25vw] md:h-[50vw] sm:h-[100vw] h-[100vw]"
            />
            <h2 className={`lg:text-3xl md:text-2xl sm:text-3xl p-2 ${blippo.variable} font-sans antialiased`}>{title ? title : ""}</h2>
        </div>
    )

    return (
        external_link ?
        (<a href={link ? link : "#"} target="_blank" className="bg-white">
            {content}
        </a> )
        :
        (<Link href={link ? link : "#"} scroll={true} className="bg-white">
            {content}
        </Link>)
    );
}