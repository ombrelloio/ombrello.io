import { MultiLink, RichText } from "@atoms";
import { Container, Section, Row, Col } from "@layout";
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
              <h2
                className="text-h2 break-words"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: headline.replaceAll("\n", "<br/>"),
                }}
              />
            </Col>
          )}
          <Col md="5" className="space-y-md md:pt-[5vw] xl:pt-lg">
            <RichText text={html} />
            <MultiLink {...link} />
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export { HeadlineAndTextAndLink };
