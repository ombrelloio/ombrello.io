import { usePageContext } from "@app/hooks/PageContext/PageContext";
import { MultiLink, RichText } from "@atoms";
import { Container, Row, Col, FadeIntersect } from "@layout";
import { TextCollectionType } from "@types";

const ColumnData = ({ title, text, multiLink }: TextCollectionType) => {
  return title || text?.html ? (
    <>
      {title && <h3 className="text-h3">{title}</h3>}
      {text && text.html && <RichText text={text.html} />}
      <MultiLink {...multiLink} className="inline-block mt-sm" />
    </>
  ) : null;
};

const PageFooter = () => {
  const { siteFooter } = usePageContext() || {};
  const { mainContent, rightColumn } = siteFooter || {};

  return (
    <footer
      className="sticky top-[100vh] mt-15 md:mt-section-gap pb-32"
      id="contact"
      data-footer
    >
      <Container className="max-w-page">
        <Row className="space-y-12 lg:space-y-0">
          <Col lg="9" xl="8" push={{ xl: 1 }}>
            <FadeIntersect method="pullup">
              {mainContent && mainContent.title && (
                <h2 className="text-40 md:text-80 lg:text-96 !leading-none font-medium max-w-4xl md:pr-16">
                  {mainContent.title}
                </h2>
              )}
              {mainContent && mainContent.text && mainContent.text.html && (
                <RichText
                  text={mainContent.text.html}
                  className="max-w-sm m-auto"
                />
              )}
              <MultiLink
                {...mainContent?.multiLink}
                className="inline-block mt-sm"
              />
            </FadeIntersect>
          </Col>
          <Col lg="3">
            <ColumnData {...rightColumn} />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default PageFooter;
