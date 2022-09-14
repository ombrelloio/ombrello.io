import cx from "classnames";
import { Multiline } from "@atoms";
import {
  Col,
  Container,
  FadeIntersect,
  InvertibleHeroSection,
  Row,
  Transitionator,
} from "@layout";
import { PageTitleProps } from "@types";
import { useEffect, useState } from "react";

const PageTitle = ({
  heading: title,
  text,
  componentTheming,
}: PageTitleProps) => {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    setIsReady(true);
  });
  return (
    <InvertibleHeroSection
      rendering="PageTitle"
      className={cx({
        "th-c-inverted": componentTheming?.theme === "inverted",
      })}
      inverted={componentTheming?.theme === "inverted"}
    >
      <Container className="max-w-page">
        <Row>
          <Col md="6">
            {title && (
              <FadeIntersect method="fade" stagger="400ms">
                <Multiline
                  text={title}
                  tag="h1"
                  className="text-40 md:text-96 xxl:text-96 !leading-none mb-6 font-medium"
                />
              </FadeIntersect>
            )}
          </Col>
        </Row>
        <Row className=" justify-end">
          <Col md="6" lg="6">
            {text && (
              <div className="max-w-xl md:mt-[1em]">
                <FadeIntersect method="fade" stagger="450ms">
                  <Multiline text={text} />
                </FadeIntersect>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </InvertibleHeroSection>
  );
};

export { PageTitle };
