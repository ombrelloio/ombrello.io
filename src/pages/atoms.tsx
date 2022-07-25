import { Col, Container, Row } from "@layout";
import { NextSeo } from "next-seo";
import React from "react";

export default function StyleGuideAtoms({ slug }: { slug: string }) {
  return (
    <>
      <NextSeo title={slug} />
      <Container>
        <Row>
          <Col>
            <div>Atoms</div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
