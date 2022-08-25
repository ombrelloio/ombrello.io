import { CardListProps } from "@types";
import { Col, Container, Row, Section } from "@layout";
import { RichText } from "@atoms";
import cx from "classnames";

const CardList = ({ heading, list = [] }: CardListProps) => {
  return (
    <Section rendering="CardList">
      <Container className="max-w-page">
        <Row>
          <Col md="5" push={{ md: 1 }}>
            {heading && <h2 className="text-h2 mb-9">{heading}</h2>}
          </Col>
        </Row>

        <Row
          className={cx("gap-y-md", {
            "lg:justify-center": list.length < 4,
          })}
        >
          {list &&
            list.length &&
            list.map(({ title, text }, index) => (
              <Col key={index} sm="6" md="4" lg="3">
                <article>
                  <h3 className="text-h3 mb-8 flex items-center">
                    <span className="bg-th-on-bg inline-block w-4 h-[1px] mr-3" />
                    {title}
                  </h3>
                  <RichText text={text} />
                </article>
              </Col>
            ))}
        </Row>
      </Container>
    </Section>
  );
};

export { CardList };
