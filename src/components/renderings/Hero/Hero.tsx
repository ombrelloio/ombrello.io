import { Multiline } from "@atoms";
import { Col, Container, FadeIntersect, Row, Section } from "@layout";
import { HeroProps } from "@types";

const Hero = ({ title, text }: HeroProps) => {
  return (
    <Section className="text-center" rendering="Hero">
      <Container>
        <Row>
          <Col md="10" display="8" push={{ md: 1, display: 2 }}>
            <FadeIntersect>
              {title && <h1 className="text-h1-vw">{title}</h1>}
            </FadeIntersect>
          </Col>
          <Col md="6" push={{ md: 3 }}>
            {text && (
              <Multiline text={text} className="opacity-80 mt-4 md:mt-6" />
            )}
          </Col>
        </Row>
      </Container>
    </Section>
  );
};
export { Hero };
