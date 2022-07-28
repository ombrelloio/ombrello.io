import { CardListProps } from "@types";
import { Col, Container, Row } from "@layout";

const CardList = ({ list }: CardListProps) => {
  return (
    <section
      className="w-full p-16 pt-20 border-b-[1px]"
      data-rendering="CardList"
    >
      <Container>
        <h2 className="mb-4">CardList</h2>

        <Row>
          {list &&
            list.length &&
            list.map(({ title, text }, index) => (
              <Col key={index} sm="6" md="4" lg="6" className="mb-8">
                <div className="font-bold">{title}</div>
                <div>{text}</div>
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export { CardList };
