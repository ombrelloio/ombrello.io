import NextImage, { ImageProps } from "next/image";
import { FC } from "react";

const Image: FC<ImageProps> = ({ src, className, alt, ...rest }) => {
  const isRelativeURL = typeof src === "string" && src.startsWith("/");
  const imageSrc = isRelativeURL ? `https:${src}` : src;

  return (
    <NextImage
      src={imageSrc}
      lazyBoundary="1500px"
      quality="80"
      className={className}
      alt={alt || (imageSrc as string)}
      {...rest}
    />
  );
};

export { Image };
