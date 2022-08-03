import { Image } from "@atoms";
import { Container, FadeIntersect, Section } from "@layout";
import { MediaProps } from "@types";

const Media = ({ image }: MediaProps) => {
  return (
    <Section rendering="Media">
      <Container>
        {image && image.url && (
          <div className="relative aspect-video">
            <FadeIntersect>
              <Image
                src={image.url}
                alt={image.fileName}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={image.smallUrl}
              />
            </FadeIntersect>
          </div>
        )}
      </Container>
    </Section>
  );
};

export { Media };
