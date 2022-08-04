import { usePageContext } from "@app/hooks/PageContext/PageContext";
import { RichText } from "@atoms";
import { Container, Row, Col } from "@layout";
import { TextCollectionType } from "@types";

const ColumnData = ({ title, text }: TextCollectionType) => {
  return title || text?.html ? (
    <>
      {title && <h3 className="text-h3">{title}</h3>}
      {text && text.html && <RichText text={text.html} />}
    </>
  ) : null;
};

const PageFooter = () => {
  const { siteFooter } = usePageContext() || {};
  const { mainContent, leftColumn, centerColumn, rightColumn } =
    siteFooter || {};
  return (
    <footer className="sticky top-[100vh] mt-12 md:mt-24 py-16" id="contact">
      <Container>
        <div className="text-center mb-64">
          {mainContent && mainContent.title && (
            <h2 className="text-120 font-bold">{mainContent.title}</h2>
          )}
          {mainContent && mainContent.text && mainContent.text.html && (
            <RichText
              text={mainContent.text.html}
              className="max-w-sm m-auto"
            />
          )}
        </div>

        <Row className="justify-center">
          <Col md="3">
            <ColumnData {...leftColumn} />
          </Col>
          <Col md="3">
            <ColumnData {...centerColumn} />
          </Col>
          <Col md="3">
            <ColumnData {...rightColumn} />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default PageFooter;
