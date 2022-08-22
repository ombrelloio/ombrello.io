import { Image, ZoomImage } from "@atoms";
import { Container, FadeIntersect, Section, Transitionator } from "@layout";
import { MediaProps } from "@types";
import { useEffect } from "react";

const Media = ({ image, componentThemingConfiguration: theme }: MediaProps) => {
  const isSplitTop = theme?.theme === "split_inverted_top";

  return (
    <Section rendering="Media" flush={isSplitTop}>
      <Container className="relative">
        {isSplitTop && (
          <div className="absolute bg-th-bg-inverted inset-0 bottom-1/2 will-change-transform origin-top scale-y-0 animate-slideDown" />
        )}
        {image && image.url && (
          <ZoomImage
            className="relative aspect-video"
            url={image.url}
            alt={image.fileName}
            lazyUrl={image.smallUrl}
          />
        )}
        {/* <FadeIntersect> */}
        {/* <Image
              src={image.url}
              alt={image.fileName}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={image.smallUrl}
            /> */}
        {/* </FadeIntersect> */}
      </Container>
    </Section>
  );
};

export { Media };
