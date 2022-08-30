import { Link, MultiLink, RichText } from "@atoms";
import { Col, Container, FadeIntersect, Row, Section } from "@layout";
import { BannerProps } from "@types";

const Banner = ({ title, text, link }: BannerProps) => {
  const { html } = text || {};
  return (
    <Section rendering="Banner">
      <Container className="max-w-page">
        <Row>
          <Col md="10" push={{ md: 1 }}>
            <FadeIntersect method="pullup">
              <div className="p-15 md:py-18 md:px-16 xl:py-[6vw] rounded-lg text-center bg-th-banner-bg text-th-banner-on-bg">
                {title && <h2 className="text-h2 mb-sm">{title}</h2>}
                <RichText text={html} className="max-w-lg m-auto" />
                <MultiLink {...link} className="mt-8" asButton />
              </div>
            </FadeIntersect>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};
export { Banner };
