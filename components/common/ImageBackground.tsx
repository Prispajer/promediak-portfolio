import React from "react";
import Image, { StaticImageData } from "next/image";

type ImageBackgroundProps = {
  backgroundImage: StaticImageData;
  children?: React.ReactNode;
  priority?: boolean;
  isFixed?: boolean;
};

const ImageBackground = ({
  backgroundImage,
  children,
  priority = true,
  isFixed = false,
}: ImageBackgroundProps) => {
  if (isFixed) {
    return (
      <>
        <div
          className="absolute inset-0 bg-cover bg-fixed bg-center"
          style={{ backgroundImage: `url(${backgroundImage.src})` }}
          aria-hidden="true"
        />
        {children}
      </>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      <Image
        src={backgroundImage}
        alt=""
        fill
        priority={priority}
        quality={85}
        placeholder="blur"
        className="object-cover object-center"
        sizes="100vw"
        aria-hidden="true"
      />
      {children}
    </div>
  );
};

export default ImageBackground;
