import { RichText } from "@atoms";
import { Col, Row, Section, Container } from "@layout";
import { JobDescriptionProps } from "@types";
import { useEffect } from "react";

const JobDescription = ({ jobHeader, jobDescription }: JobDescriptionProps) => {
  useEffect(() => {
    document.body.classList.remove("inverted");
  });
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
