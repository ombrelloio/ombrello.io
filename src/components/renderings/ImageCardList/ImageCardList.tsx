import { Col, Container, Row } from "@layout";
import { ImageCardListProps } from "@types";

const ImageCardList = ({ images }: ImageCardListProps) => {
  return (
    <section
      className="w-full p-16 pt-20 border-b-[1px]"
      data-rendering="ImageCardList"
    >
      <p className="font-bold mb-10">ImageCardList</p>
      {images && images.length && (
        <Container>
          <Row className="gap-y-10">
            {images.map(
              ({ id, title, text, image }) =>
                image?.url && (
                  <Col key={id} sm="6" md="4" lg="3">
                    <div>
                      <img src={image.url} alt="" />
                      <p className="font-bold">{title}</p>
                      <p>{text}</p>
                    </div>
                  </Col>
                )
            )}
          </Row>
        </Container>
      )}
    </section>
  );
};

export { ImageCardList };
