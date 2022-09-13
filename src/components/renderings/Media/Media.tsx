import { ZoomImage } from "@atoms";
import { Container, Section } from "@layout";
import { Image } from "@atoms";
import { MediaProps } from "@types";

const Media = ({ image, componentThemingConfiguration: theme }: MediaProps) => {
  const isSplitTop = theme?.theme === "split_inverted_top";

  return (
    <Section rendering="Media" flush={isSplitTop}>
      <Container className="relative">
        {isSplitTop && (
          <>
            <div
              className="absolute bg-th-bg-inverted inset-0 bottom-1/2"
              data-component-theme="inverted"
            />
            <div className="absolute inset-0 top-1/2" data-component-theme="" />
          </>
        )}
        {image && image.url && (
          <div className="relative aspect-video">
            <Image
              src={image.url}
              layout="fill"
              objectPosition="center"
              objectFit="cover"
              blurDataURL={image.smallUrl}
              placeholder="blur"
            />
          </div>
        )}
      </Container>
    </Section>
  );
};

export { Media };
