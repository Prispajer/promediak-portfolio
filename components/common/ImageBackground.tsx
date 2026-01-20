import {StaticImageData} from "next/image";

type ImageBackgroundProps = {
    backgroundImage: StaticImageData;
    className?: string;
};

const ImageBackground = ({backgroundImage, className}: ImageBackgroundProps) => {
    return (
        <div className={`absolute inset-0 ${className}`} style={{backgroundImage: `url(${backgroundImage.src})`}}/>
    );
}

export default ImageBackground;