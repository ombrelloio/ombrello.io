import React from "react";
import { NextSeo } from "next-seo";
import { Container, Row, Col } from "@layout";
import { Image, Link } from "@atoms";

export default function Page() {
  return (
    <>
      <NextSeo title="Home" />
      <section className="my-32 md:my-64">
        <Container>
          <Row className="mb-32">
            <Col md="6">
              <h1 className="text-24 md:text-120 font-bold mb-16">Cases</h1>
            </Col>
            <Col md="6">
              <div className="richtext">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Iusto dignissimos consectetur fugit dolor laboriosam,
                  possimus, accusamus praesentium quae porro consequatur
                  voluptatum! Nobis non quasi, delectus placeat veritatis nemo
                  voluptas quae.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aperiam ipsum explicabo perspiciatis dicta autem! Explicabo
                  beatae dignissimos repudiandae repellat voluptate! Placeat
                  aliquam perspiciatis expedita eius aspernatur labore soluta
                  eum voluptate.
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Iusto dignissimos consectetur fugit dolor laboriosam,
                  possimus, accusamus praesentium quae porro consequatur
                  voluptatum! Nobis non quasi, delectus placeat veritatis nemo
                  voluptas quae.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="my-16 md:my-32">
        <Container>
          <Row>
            <Col md="10">
              <div className="relative aspect-video">
                <Image
                  layout="fill"
                  object-fit="cover"
                  object-position="center"
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                />
              </div>
            </Col>
          </Row>

          <Row className="mt-16">
            <Col md="5">
              <h2 className="text-40 font-bold">Client name</h2>
              <p>Tech: React, JSS, Sitecore, bla bla bla</p>
            </Col>

            <Col md="5">
              <div className="richtext">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                  consequuntur voluptatibus esse rerum. Corrupti, omnis
                  perferendis. Quisquam, ipsum minima sunt nam, deserunt dolor
                  distinctio pariatur facere libero voluptatibus, expedita
                  earum. Excepturi, doloremque eaque nihil at vitae in quam
                  fugit sunt ea recusandae dignissimos! Odio ex repellendus,
                  quibusdam neque sint cumque sapiente ab corrupti at et quod
                  error suscipit ullam repudiandae. Magni laborum dicta adipisci
                  accusantium sint, hic est dignissimos facere voluptates nihil
                  esse molestias similique expedita nesciunt, sed omnis, earum
                  exercitationem enim consectetur a quod officia maxime animi?
                  Officia, cumque?
                </p>
              </div>
              <Link href="/#">
                <span className="inline-block mt-8 underline underline-offset-2">
                  Visit site
                </span>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="my-16 md:my-32">
        <Container>
          <Row className="justify-end">
            <Col md="10">
              <div className="relative aspect-video">
                <Image
                  layout="fill"
                  object-fit="cover"
                  object-position="center"
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                />
              </div>
            </Col>
          </Row>

          <Row className="mt-16 justify-end">
            <Col md="5">
              <h2 className="text-40 font-bold">Client name</h2>
              <p>Tech: React, JSS, Sitecore, bla bla bla</p>
            </Col>

            <Col md="5">
              <div className="richtext">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                  consequuntur voluptatibus esse rerum. Corrupti, omnis
                  perferendis. Quisquam, ipsum minima sunt nam, deserunt dolor
                  distinctio pariatur facere libero voluptatibus, expedita
                  earum. Excepturi, doloremque eaque nihil at vitae in quam
                  fugit sunt ea recusandae dignissimos! Odio ex repellendus,
                  quibusdam neque sint cumque sapiente ab corrupti at et quod
                  error suscipit ullam repudiandae. Magni laborum dicta adipisci
                  accusantium sint, hic est dignissimos facere voluptates nihil
                  esse molestias similique expedita nesciunt, sed omnis, earum
                  exercitationem enim consectetur a quod officia maxime animi?
                  Officia, cumque?
                </p>
              </div>
              <Link href="/#">
                <span className="inline-block mt-8 underline underline-offset-2">
                  Visit site
                </span>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="my-16 md:my-32">
        <Container>
          <Row>
            <Col md="10">
              <div className="relative aspect-video">
                <Image
                  layout="fill"
                  object-fit="cover"
                  object-position="center"
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                />
              </div>
            </Col>
          </Row>

          <Row className="mt-16">
            <Col md="5">
              <h2 className="text-40 font-bold">Client name</h2>
              <p>Tech: React, JSS, Sitecore, bla bla bla</p>
            </Col>

            <Col md="5">
              <div className="richtext">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                  consequuntur voluptatibus esse rerum. Corrupti, omnis
                  perferendis. Quisquam, ipsum minima sunt nam, deserunt dolor
                  distinctio pariatur facere libero voluptatibus, expedita
                  earum. Excepturi, doloremque eaque nihil at vitae in quam
                  fugit sunt ea recusandae dignissimos! Odio ex repellendus,
                  quibusdam neque sint cumque sapiente ab corrupti at et quod
                  error suscipit ullam repudiandae. Magni laborum dicta adipisci
                  accusantium sint, hic est dignissimos facere voluptates nihil
                  esse molestias similique expedita nesciunt, sed omnis, earum
                  exercitationem enim consectetur a quod officia maxime animi?
                  Officia, cumque?
                </p>
              </div>
              <Link href="/#">
                <span className="inline-block mt-8 underline underline-offset-2">
                  Visit site
                </span>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
