import cx from "classnames";
import { Button, Image, Multiline, ZoomImage } from "@atoms";
import {
  Col,
  Container,
  FadeIntersect,
  InvertibleHeroSection,
  Row,
} from "@layout";
import { PageTitleProps } from "@types";
import { memo } from "react";

const PageTitle = ({ title, text, componentTheming }: PageTitleProps) => {
  return (
    <InvertibleHeroSection
      rendering="PageTitle"
      className={cx("md:pb-18 ", {
        "th-c-inverted": (componentTheming?.theme as string) === "inverted'",
      })}
    >
      <Container className="max-w-page">
        <FadeIntersect>
          <Row>
            <Col md="6">
              {title && (
                <h1 className="text-vw-large mb-6 xl:mb-lg">{title}</h1>
              )}
            </Col>
            <Col md="5">
              {text && (
                <div className="max-w-xl">
                  <Multiline text={text} />
                </div>
              )}
            </Col>
          </Row>
        </FadeIntersect>
      </Container>
    </InvertibleHeroSection>
  );
};

export { PageTitle };
