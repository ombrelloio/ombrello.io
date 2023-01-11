import { Multiline, ZoomImage } from "@atoms";
import { Col, Container, Row, Section } from "@layout";
import { ImageCardListProps } from "@types";
import cx from "classnames";

const ImageCardList = ({ images = [], heading }: ImageCardListProps) => {
  return (
    <Section rendering="ImageCardList">
      <Container className="max-w-page">
        <Row>
          <Col md="5" push={{ md: 1 }}>
            {heading && <h2 className="text-h2 mb-24">{heading}</h2>}
          </Col>
        </Row>

        {images.length && (
          <Row
            className={cx("gap-y-xl ", {
              "lg:justify-center": images.length < 4,
            })}
          >
            {images.map(
              ({ id, imageCardTitle, text, image }, index) =>
                image?.url && (
                  <Col key={id} sm="6" md="4" lg="3">
                    <article>
                      <ZoomImage
                        url={image.url}
                        alt={imageCardTitle}
                        lazyUrl={image.lazyUrl}
                        sizes="400px"
                        className="relative aspect-[9/11] mb-sm filter grayscale"
                        stagger={`${index * 24}ms`}
                      />
                      {imageCardTitle && (
                        <h3 className="text-h3">{imageCardTitle}</h3>
                      )}
                      {text && <Multiline className="mt-4" text={text} />}
                    </article>
                  </Col>
                )
            )}
          </Row>
        )}
      </Container>
    </Section>
  );
};

export { ImageCardList };
