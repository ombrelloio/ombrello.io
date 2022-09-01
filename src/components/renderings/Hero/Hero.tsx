import cx from "classnames";
import { Multiline, MultiLink } from "@atoms";
import {
  Col,
  Container,
  FadeIntersect,
  InvertibleHeroSection,
  Row,
} from "@layout";
import { HeroProps } from "@types";
import { isMultiLinkValid } from "@app/helpers/utils.helpers";

const Hero = ({
  title,
  text,
  cta,
  componentThemingConfiguration: theme,
}: HeroProps) => {
  return (
    <InvertibleHeroSection
      rendering="Hero"
      className={cx("text-center", {
        "th-c-inverted": theme?.theme === "inverted",
      })}
      inverted={theme?.theme === "inverted"}
    >
      <Container>
        <Row>
          <Col sm="10" display="8" push={{ sm: 1, display: 2 }}>
            {title && (
              <FadeIntersect method="zoomIn">
                <Multiline text={title} tag="h1" className="text-h1-vw" />
              </FadeIntersect>
            )}
          </Col>
          {(text || isMultiLinkValid(cta)) && (
            <Col md="6" push={{ md: 3 }}>
              <FadeIntersect method="zoomIn" stagger="50ms">
                {text && (
                  <Multiline text={text} className="text-20 opacity-80 mt-8" />
                )}
                {isMultiLinkValid(cta) && (
                  <MultiLink {...cta} asButton className="mt-8" />
                )}
              </FadeIntersect>
            </Col>
          )}
        </Row>
      </Container>
    </InvertibleHeroSection>
  );
};
export { Hero };
