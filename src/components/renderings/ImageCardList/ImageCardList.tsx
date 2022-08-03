import { Image, Multiline } from "@atoms";
import { Col, Container, Row, Section } from "@layout";
import { ImageCardListProps } from "@types";

const ImageCardList = ({ images, heading }: ImageCardListProps) => {
  return (
    <Section rendering="ImageCardList">
      <Container>
        {heading && (
          <h2 className="text-h2 mb-lg md:mb-xl max-w-xl">{heading}</h2>
        )}
      </Container>

      {images && images.length && (
        <Container>
          <Row className="gap-y-lg">
            {images.map(
              ({ id, imageCardTitle, text, image }) =>
                image?.url && (
                  <Col key={id} sm="6" md="4" lg="3">
                    <div>
                      <div className="relative aspect-square mb-sm">
                        <Image
                          src={image.url}
                          alt={imageCardTitle}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="center"
                        />
                      </div>
                      {imageCardTitle && (
                        <h3 className="text-h3">{imageCardTitle}</h3>
                      )}
                      {text && <Multiline text={text} />}
                    </div>
                  </Col>
                )
            )}
          </Row>
        </Container>
      )}
    </Section>
  );
};

export { ImageCardList };
