import { CardListProps } from "@types";
import { Col, Container, FadeIntersect, Row, Section } from "@layout";
import { RichText } from "@atoms";
import cx from "classnames";

const CardList = ({ heading, list = [] }: CardListProps) => {
  return (
    <Section rendering="CardList">
      <Container className="max-w-page">
        <Row>
          <Col md="6">
            {heading && <h2 className="text-h2 mb-24">{heading}</h2>}
          </Col>
        </Row>

        <Row className={cx(" gap-y-md md:gap-y-xl")}>
          {list &&
            list.length &&
            list.map(({ title, text }, index) => (
              <Col key={index} sm="6" md="4">
                <article>
                  <FadeIntersect method="zoomIn" stagger={`${index * 16}ms`}>
                    <span className="text-64 md:text-80">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-h3 mb-4 relative flex items-baseline">
                      {/* <span className="relative bg-th-on-bg inline-block w-4 h-[1px] mr-3 bottom-2" /> */}
                      <span>{title}</span>
                    </h3>
                    <RichText text={text} className="max-w-sm" />
                  </FadeIntersect>
                </article>
              </Col>
            ))}
        </Row>
      </Container>
    </Section>
  );
};

export { CardList };
