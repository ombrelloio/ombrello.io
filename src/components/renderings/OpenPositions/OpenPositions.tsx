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
          <Col root="12" lg="10" push={{ lg: 1 }} className="space-y-8">
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
                        className="relative block rounded-[1rem] p-8 pb-9 bg-th-bg-strong gradient-border"
                        noUnderline
                      >
                        <div className="flex items-baseline justify-between flex-wrap gap-x-sm">
                          <h3 className="text-h3 mb-4 basis-full shrink-0 sm:basis-auto">
                            {position.jobHeader}
                          </h3>
                          {position.hours && (
                            <p className="text-14 whitespace-nowrap uppercase text-th-on-bg-fade mb-4 sm:mb-0">
                              {position.hours}
                            </p>
                          )}
                        </div>
                        {position.teaser && (
                          <Multiline text={position.teaser} />
                        )}
                      </Link>
                      {/* </div> */}
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
