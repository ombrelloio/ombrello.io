import { RichText } from "@atoms";
import { Col, Row, Section, Container } from "@layout";
import { JobDescriptionProps } from "@types";

const JobDescription = ({ jobHeader, jobDescription }: JobDescriptionProps) => {
  return (
    <Section rendering="JobDescription">
      <Container>
        <Row className="mb-xl">
          <Col md="6">
            {jobHeader && <h1 className="text-h1-vw mb-lg">{jobHeader}</h1>}
          </Col>
          <Col md="6">
            {jobDescription && jobDescription.html && (
              <RichText text={jobDescription.html} />
            )}
          </Col>
        </Row>
      </Container>
    </Section>
  );
};
export { JobDescription };
