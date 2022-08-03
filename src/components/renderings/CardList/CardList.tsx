import { CardListProps } from "@types";
import { Col, Container, Row, Section } from "@layout";

const CardList = ({ heading, list }: CardListProps) => {
  return (
    <Section rendering="CardList">
      <Container>
        {heading && (
          <h2 className="text-h2 mb-lg md:mb-xl max-w-xl">{heading}</h2>
        )}

        <Row className="gap-y-lg">
          {list &&
            list.length &&
            list.map(({ title, text }, index) => (
              <Col key={index} sm="6" md="4" lg="3">
                <div>
                  <div className="font-bold">{title}</div>
                  <div>{text}</div>
                </div>
              </Col>
            ))}
        </Row>
      </Container>
    </Section>
  );
};

export { CardList };
