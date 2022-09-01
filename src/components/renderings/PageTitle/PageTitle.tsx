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

const PageTitle = ({ title, text, componentTheming }: PageTitleProps) => {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    setIsReady(true);
  });
  return (
    <InvertibleHeroSection
      rendering="PageTitle"
      className={cx("md:pb-18 ", {
        "th-c-inverted": componentTheming?.theme === "inverted",
      })}
      inverted={componentTheming?.theme === "inverted"}
    >
      <Container className="max-w-page">
        <Row>
          <Col md="6">
            {title && (
              <Transitionator method="zoomIn" stagger="100ms" isIn={isReady}>
                <Multiline
                  text={title}
                  tag="h1"
                  className="text-vw-large mb-6 xl:mb-lg"
                />
              </Transitionator>
            )}
          </Col>
          <Col md="5">
            {text && (
              <div className="max-w-xl">
                <Transitionator method="zoomIn" stagger="100ms" isIn={isReady}>
                  <Multiline text={text} className="text-20" />
                </Transitionator>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </InvertibleHeroSection>
  );
};

export { PageTitle };
