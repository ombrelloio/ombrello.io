/* eslint-disable no-underscore-dangle */
import { Multiline, Link } from "@atoms";
import { Col, Container, FadeIntersect, Row, Section } from "@layout";
import { OpenPositionsProps } from "@types";

const OpenPositions = ({
  heading,
  text,
  contactEmail,
  contactPageLink,
  jobPages,
}: OpenPositionsProps) => {
  return (
    <Section rendering="openPositions">
      <Container className="max-w-page">
        <Row className="space-y-md">
          <Col md="6">
            <FadeIntersect method="zoomIn" className="space-y-sm">
              {heading && <h2 className="text-h2 max-w-xl">{heading}</h2>}
              {text && <Multiline text={text} className="max-w-md" />}
              {contactEmail && (
                <p>
                  <Link href={`mailto:${contactEmail}`}>{contactEmail}</Link>
                </p>
              )}
              {contactPageLink?.slug && (
                <p>
                  <Link href={contactPageLink.slug}>
                    {contactPageLink?.navigationLabel ||
                      (contactPageLink.slug as string)}
                  </Link>
                </p>
              )}
            </FadeIntersect>
          </Col>
          <Col md="5" push={{ md: 1 }} className="space-y-8">
            {jobPages &&
              jobPages.length &&
              jobPages.map(({ slug, renderings }, index) => {
                if (!renderings) return null;
                // return first instance of a JobDescription components data on on the page
                const position = renderings?.filter(
                  (component) => component.__typename === "JobDescription"
                )[0];
                return (
                  !!position &&
                  slug && (
                    <FadeIntersect
                      method="zoomIn"
                      stagger={`${index * 16}ms`}
                      key={index}
                    >
                      <Link
                        href={slug}
                        className="block rounded-lg p-8 transition bg-th-bg-inverted text-th-body-inverted hover:scale-105"
                        noUnderline
                      >
                        <p className="font-bold">{position.jobHeader}</p>
                        <p>{position.hours}</p>
                      </Link>
                    </FadeIntersect>
                  )
                );
              })}
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export { OpenPositions };
