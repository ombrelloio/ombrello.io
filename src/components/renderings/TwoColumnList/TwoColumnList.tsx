import { Col, Container, Row } from "@layout";
import { TwoColumnListProps } from "@types";

const TwoColumnList = ({ imageCards }: TwoColumnListProps) => {
  return (
    <section
      className="w-full p-16 pt-20 border-b-[1px]"
      data-rendering="TwoColumnList"
    >
      <p className="font-bold mb-10">TwoColumnList</p>

      {imageCards && imageCards.length && (
        <Container>
          <Row className="gap-y-10">
            {imageCards.map(
              ({ title, text, image, id }) =>
                image?.url && (
                  <Col root="6" key={id}>
                    <img src={image.url} alt={title} />
                    <p>{title}</p>
                    <p>{text}</p>
                  </Col>
                )
            )}
          </Row>
        </Container>
      )}
    </section>
  );
};

export { TwoColumnList };
