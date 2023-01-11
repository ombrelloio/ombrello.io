import { MultiLink, RichText } from "@atoms";
import { Container, Section, Row, Col, FadeIntersect } from "@layout";
import { HeadlineAndTextAndLinkProps } from "@types";

const HeadlineAndTextAndLink = ({
  headline,
  text,
  link,
}: HeadlineAndTextAndLinkProps) => {
  const { html } = text || {};

  return (
    <Section rendering="HeadlineAndTextAndLink">
      <Container>
        <Row className="gap-y-lg">
          {headline && (
            <Col md="5" push={{ md: 1 }}>
              <FadeIntersect method="fade" stagger="100ms">
                <h2
                  className="text-h2 break-words"
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{
                    __html: headline.replaceAll("\n", "<br/>"),
                  }}
                />
              </FadeIntersect>
            </Col>
          )}
          <Col md="5" className="space-y-md">
            <FadeIntersect method="fade" stagger="200ms">
              <RichText text={html} />
            </FadeIntersect>
            <FadeIntersect method="fade" stagger="300ms">
              <MultiLink {...link} />
            </FadeIntersect>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export { HeadlineAndTextAndLink };
