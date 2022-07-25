import NextImage, { ImageProps } from "next/image";
import { FC } from "react";

const Image: FC<ImageProps> = ({ src, className, ...rest }) => {
  const isRelativeURL = typeof src === "string" && src.startsWith("/");

  return (
    <NextImage
      src={isRelativeURL ? `https:${src}` : src}
      lazyBoundary="9999px"
      layout="fill"
      objectFit="cover"
      objectPosition="center"
      quality="80"
      {...rest}
      className={className}
    />
  );
};

export { Image };
