import Image from "next/image";
import Link from "next/link";

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
                    src={ image_path ? image_path : '/placeholder_image.jpg' }
                    width={2000}
                    height={2000}
                    alt="Placeholder"
                    className="w-full object-scale-down h-96"
                />
                <h2 className="text-3xl p-2">{title ? title : ""}</h2>
            </div>
        </Link>    
    );
}