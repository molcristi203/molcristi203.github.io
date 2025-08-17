import ExportedImage from "next-image-export-optimizer";

interface Props {
    src : string;
    alt : string;
    additional_classes? : string;
};

export default function CustomImage({src, alt, additional_classes} : Props)
{
    return (
        <ExportedImage
            src={src}
            alt={alt}
            width={500}
            height={500}
            className={`h-full object-contain w-full ${additional_classes}`}
        />
    );
}