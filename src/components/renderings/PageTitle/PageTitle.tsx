import cx from "classnames";
import { Multiline } from "@atoms";
import {
  Col,
  Container,
  FadeIntersect,
  InvertibleHeroSection,
  Row,
} from "@layout";
import { PageTitleProps } from "@types";

const PageTitle = ({ title, text, componentTheming }: PageTitleProps) => {
  return (
    <InvertibleHeroSection
      rendering="PageTitle"
      className={cx("md:pb-18 ", {
        "th-c-inverted": componentTheming?.theme === "inverted",
      })}
      inverted={componentTheming?.theme === "inverted"}
    >
      <Container className="max-w-page">
        <FadeIntersect>
          <Row>
            <Col md="6">
              {title && (
                <FadeIntersect method="zoomIn" rootMargin="0px" stagger="100ms">
                  <Multiline
                    text={title}
                    tag="h1"
                    className="text-vw-large mb-6 xl:mb-lg"
                  />
                </FadeIntersect>
              )}
            </Col>
            <Col md="5">
              {text && (
                <div className="max-w-xl">
                  <FadeIntersect method="zoomIn" stagger="100ms">
                    <Multiline text={text} />
                  </FadeIntersect>
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
