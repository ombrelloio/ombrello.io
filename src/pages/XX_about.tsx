import React from "react";
import { NextSeo } from "next-seo";
import { Container, Row, Col } from "@layout";
import { Image } from "@atoms";

type PageProps = {};

export default function Page() {
  return (
    <>
      <NextSeo title="Home" />
      <section className="mt-64 mb-8">
        <Container>
          <h1 className="text-40 md:text-62 lg:text-120">Founded in 2022</h1>
        </Container>
      </section>
      <section className="my-8">
        <Container>
          <div className="relative aspect-video">
            <Image
              layout="fill"
              object-fit="cover"
              object-position="center"
              src="https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1810&q=80"
            />
          </div>
          <Row className=" justify-end">
            <Col lg="8">
              <div className="richtext text-24 mt-8">
                <p>
                  We have a shared passion for making peoples live better
                  through design and technology. Our team consists of
                  experienced design specialists. We cover user experience,
                  strategic facilitation and visual design. We team up with
                  skilled partners - from coders to copywriters and industry
                  specialists. If you ever want to visit us, youll find us at
                  our Nørrebro office in beautiful Copenhagen. We promise to
                  serve a great cup of coffee alongside our expertise.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
