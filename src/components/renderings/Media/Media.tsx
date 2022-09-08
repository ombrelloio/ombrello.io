import { ZoomImage } from "@atoms";
import { Container, Section } from "@layout";
import { MediaProps } from "@types";

const Media = ({ image, componentThemingConfiguration: theme }: MediaProps) => {
  const isSplitTop = theme?.theme === "split_inverted_top";

  return (
    <Section rendering="Media" flush={isSplitTop}>
      <Container className="relative">
        {isSplitTop && (
          <>
            <div
              className="absolute bg-th-bg-inverted inset-0 bottom-1/2 will-change-transform origin-top scale-y-0 animate-slideDown"
              data-component-theme="inverted"
            />
            <div className="absolute inset-0 top-1/2" data-component-theme="" />
          </>
        )}
        {image && image.url && (
          <ZoomImage
            className="relative aspect-video"
            url={image.url}
            alt={image.fileName}
            lazyUrl={image.smallUrl}
          />
        )}
      </Container>
    </Section>
  );
};

export { Media };
