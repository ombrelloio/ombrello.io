/* eslint-disable no-underscore-dangle */
import { Multiline, Link } from "@atoms";
import { Col, Container, Row, Section } from "@layout";
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
      <Container>
        <Row className="space-y-md">
          <Col md="6" className="space-y-sm">
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
          </Col>
          <Col md="6" className="space-y-8">
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
                    <Link
                      href={slug}
                      key={index}
                      className="block bg-white/95 rounded-lg text-black p-8 transition hover:bg-white"
                      noUnderline
                    >
                      <p className="font-bold">{position.jobHeader}</p>
                      <p>{position.hours}</p>
                    </Link>
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
