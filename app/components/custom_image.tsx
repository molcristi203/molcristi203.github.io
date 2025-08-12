import ExportedImage from "next-image-export-optimizer";

interface Props {
    src : string;
    alt : string;
    additional_classes? : string;
    key : number;
};

export function CustomImage({src, alt, additional_classes, key} : Props)
{
    return (
        <ExportedImage
            src={src}
            alt={alt}
            width={500}
            height={500}
            className={`h-full object-scale-down w-full ${additional_classes}`}
            key={key}
        />
    );
}