import { Button, Multiline } from "@atoms";
import { Col, Container, FadeIntersect, Row, Section } from "@layout";
import { PageTitleProps } from "@types";

const PageTitle = ({ title, text }: PageTitleProps) => {
  return (
    <Section rendering="PageTitle">
      <Container>
        <FadeIntersect>
          <Row>
            <Col md="6" className="flex md:justify-end">
              {title && (
                <h1 className="text-h1-vw mb-sm md:max-w-[min-content]">
                  <span
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{
                      __html: title.replaceAll("_", "&nbsp;"),
                    }}
                  />
                </h1>
              )}
            </Col>
            <Col md="6">
              {text && (
                <div className="max-w-xl">
                  <Multiline text={text} />
                </div>
              )}
            </Col>
          </Row>
        </FadeIntersect>
      </Container>
    </Section>
  );
};

export { PageTitle };
