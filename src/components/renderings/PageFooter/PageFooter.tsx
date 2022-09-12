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
        <Row className="space-y-12">
          <Col sm="9" md="8" push={{ md: 1, xxl: 1 }}>
            <FadeIntersect method="pullup">
              {mainContent && mainContent.title && (
                <h2 className="text-vw-large">{mainContent.title}</h2>
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
          <Col sm="3">
            <ColumnData {...rightColumn} />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default PageFooter;
