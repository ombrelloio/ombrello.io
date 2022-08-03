import { Image, Multiline, Link } from "@atoms";
import { Col, Container, FadeIntersect, Row, Section } from "@layout";
import { ImageCardProps, TwoColumnListProps } from "@types";
import cx from "classnames";

const ListItem = ({
  imageCardTitle,
  text,
  image,
  internalLink,
  internalLinkLabel,
}: ImageCardProps) => {
  if (!image || !image.url) return null;
  return (
    <FadeIntersect>
      <div className="relative aspect-square mb-sm">
        <Image
          src={image.url}
          alt={imageCardTitle}
          layout="fill"
          objectPosition="center"
          objectFit="cover"
        />
      </div>
      {imageCardTitle && <h3 className="text-h3 mb-2">{imageCardTitle}</h3>}
      {text && <Multiline text={text} />}
      {internalLink && internalLink.page.slug && (
        <p className="mt-md opacity-30 group-hover:opacity-100 transition duration-300 underline underline-offset-4">
          {internalLinkLabel || "Link"}
        </p>
      )}
    </FadeIntersect>
  );
};

const TwoColumnList = ({ heading, imageCards }: TwoColumnListProps) => {
  return (
    <Section rendering="TwoColumnList">
      <Container>
        {heading && (
          <h2 className="text-h2 mb-lg md:mb-xl max-w-xl">{heading}</h2>
        )}
        {imageCards && imageCards.length && (
          <Row className="gap-y-md justify-between">
            {imageCards.map((cardItem) => (
              <Col
                sm="6"
                md="5"
                key={cardItem.id}
                className="relative even:sm:top-16 even:md:top-32 even:last:sm:mb-16 even:last:md:mb-32"
              >
                {cardItem.internalLink && cardItem.internalLink.page.slug ? (
                  <Link
                    href={cardItem.internalLink.page.slug}
                    className="block group"
                    noUnderline
                  >
                    <ListItem {...cardItem} />
                  </Link>
                ) : (
                  <ListItem {...cardItem} />
                )}
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </Section>
  );
};

export { TwoColumnList };
