import Image from "next/image";

interface SectionProps {
    text : string;
    image : string;
}

export default function SectionRev({text, image} : SectionProps) {
    return (
        <div className="flex w-full flex-row-reverse box-border border-b-2 border-black">
            <div className="flex-1">
                <p className="text-2xl text-justify p-8">{text}</p>
            </div>
            <div className="flex-1 flex justify-center h-96 border-r-2 border-black">
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