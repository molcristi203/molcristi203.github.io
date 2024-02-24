import Image from "next/image";

interface SectionProps {
    text : string;
    image : string;
}

export default function SectionRev({text, image} : SectionProps) {
    return (
        <div className="flex w-full sm:flex-row-reverse flex-col box-border border-b-2 border-black">
            <div className="flex-1">
                <p className="lg:text-2xl md:text-xl sm:text-xl text-sm sm:h-[50vw] lg:h-[35vw] h-[100vw] border-b-2 sm:border-b-0 border-black text-justify sm:p-8 p-4">{text}</p>
            </div>
            <div className="flex-1 justify-center lg:h-[35vw] md:h-[50vw] sm:h-[50vw] h-[100vw] border-r-2 border-black">
                <Image
                    src={image}
                    width={2000}
                    height={2000}
                    alt="Image"
                    className="object-scale-down h-full w-full"
                />
            </div>
        </div>
    );
}