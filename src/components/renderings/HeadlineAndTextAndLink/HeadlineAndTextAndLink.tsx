import { Link, RichText } from "@atoms";
import { Container, Section, Row, Col } from "@layout";
import { HeadlineAndTextAndLinkProps } from "@types";

const HeadlineAndTextAndLink = ({
  headline,
  text,
  link,
}: HeadlineAndTextAndLinkProps) => {
  const { internalLink, label } = link || {};

  return (
    <Section rendering="HeadlineAndTextAndLink">
      <Container>
        <Row className="gap-y-lg">
          <Col md="6">
            {headline && (
              <h2
                className="text-h2"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: headline.replaceAll("\n", "<br/>"),
                }}
              />
            )}
          </Col>
          <Col md="6" className="space-y-md">
            {text && text.html && <RichText text={text.html} />}
            {internalLink?.slug && (
              <Link href={internalLink.slug} className="inline-block">
                {label}
              </Link>
            )}
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export { HeadlineAndTextAndLink };
