import React from "react";
import { NextSeo } from "next-seo";
import { Container, Row, Col } from "@layout";
import { Image, Link } from "@atoms";

const Service = ({ headline }: { headline: string }) => (
  <div className="group">
    <div className="relative aspect-square">
      <Image
        layout="fill"
        object-fit="cover"
        object-position="center"
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1640&q=60"
      />
    </div>
    <div className="mt-4">
      <h2 className="text-20 font-bold mb-2">{headline}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
        reprehenderit sunt iste? Harum voluptas amet nam enim fuga perferendis.
      </p>
    </div>
  </div>
);

export default function Page() {
  return (
    <>
      <NextSeo title="Home" />
      <section className="my-32 md:my-64">
        <Container>
          <Row className="mb-32">
            <Col md="6">
              <h1 className="text-24 md:text-120 font-bold mb-16">
                Technology & Services
              </h1>
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
          <div className="relative aspect-video">
            <Image
              layout="fill"
              object-fit="cover"
              object-position="center"
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            />
          </div>
        </Container>
      </section>

      <section className="my-32 md:my-64">
        <Container>
          <h2 className="text-24 md:text-40 font-bold mb-16 md:mb-32 max-w-xl">
            We provide a wide range of Services lorem ipsum dolor sit amet
            consectetur, adipisicing elit.
          </h2>

          <Row className="gap-y-16">
            <Col md="4" lg="3">
              <h3 className="text-20 font-bold">Service</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias quo quae unde? Nisi ratione laudantium inventore
                voluptatem. Totam, aspernatur tempora, sit nesciunt odit eius
                alias quod at voluptatem nemo maxime?
              </p>
            </Col>
            <Col md="4" lg="3">
              <h3 className="text-20 font-bold">Service</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias quo quae unde? Nisi ratione laudantium inventore
                voluptatem. Totam, aspernatur tempora, sit nesciunt odit eius
                alias quod at voluptatem nemo maxime?
              </p>
            </Col>
            <Col md="4" lg="3">
              <h3 className="text-20 font-bold">Service</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias quo quae unde? Nisi ratione laudantium inventore
                voluptatem. Totam, aspernatur tempora, sit nesciunt odit eius
                alias quod at voluptatem nemo maxime?
              </p>
            </Col>
            <Col md="4" lg="3">
              <h3 className="text-20 font-bold">Service</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias quo quae unde? Nisi ratione laudantium inventore
                voluptatem. Totam, aspernatur tempora, sit nesciunt odit eius
                alias quod at voluptatem nemo maxime?
              </p>
            </Col>
            <Col md="4" lg="3">
              <h3 className="text-20 font-bold">Service</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias quo quae unde? Nisi ratione laudantium inventore
                voluptatem. Totam, aspernatur tempora, sit nesciunt odit eius
                alias quod at voluptatem nemo maxime?
              </p>
            </Col>
            <Col md="4" lg="3">
              <h3 className="text-20 font-bold">Service</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias quo quae unde? Nisi ratione laudantium inventore
                voluptatem. Totam, aspernatur tempora, sit nesciunt odit eius
                alias quod at voluptatem nemo maxime?
              </p>
            </Col>
            <Col md="4" lg="3">
              <h3 className="text-20 font-bold">Service</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias quo quae unde? Nisi ratione laudantium inventore
                voluptatem. Totam, aspernatur tempora, sit nesciunt odit eius
                alias quod at voluptatem nemo maxime?
              </p>
            </Col>
            <Col md="4" lg="3">
              <h3 className="text-20 font-bold">Service</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias quo quae unde? Nisi ratione laudantium inventore
                voluptatem. Totam, aspernatur tempora, sit nesciunt odit eius
                alias quod at voluptatem nemo maxime?
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="my-32 md:my-64">
        <Container>
          <h2 className="text-24 md:text-40 font-bold mb-16 md:mb-32 max-w-xl">
            We work with a wide range of Tech lorem ipsum dolor sit amet
            consectetur, adipisicing elit.
          </h2>
          <Row className="justify-between gap-y-32">
            <Col md="5">
              <Service headline="Technology" />
            </Col>
            <Col md="5" className="md:mt-32">
              <Service headline="Technology" />
            </Col>
            <Col md="5" className="md:-mt-32">
              <Service headline="Technology" />
            </Col>

            <Col md="5">
              <Service headline="Technology" />
            </Col>

            <Col md="5" className="md:-mt-32">
              <Service headline="Technology" />
            </Col>

            <Col md="5">
              <Service headline="Technology" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="my-32 md:my-64">
        <Container>
          <h2 className="text-24 md:text-40 font-bold mb-16 md:mb-24 max-w-xl">
            Our approach is an uber-flexible methodology to suit your unique
            needs
          </h2>

          <Row className="gap-y-16">
            <Col md="4">
              <h3 className="text-20 font-bold">Approach point 1</h3>
              <p className="max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias quo quae unde? Nisi ratione laudantium inventore
                voluptatem. Totam, aspernatur tempora, sit nesciunt odit eius
                alias quod at voluptatem nemo maxime?
              </p>
            </Col>
            <Col md="4">
              <h3 className="text-20 font-bold">Approach point 2</h3>
              <p className="max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias quo quae unde? Nisi ratione laudantium inventore
                voluptatem. Totam, aspernatur tempora, sit nesciunt odit eius
                alias quod at voluptatem nemo maxime?
              </p>
            </Col>
            <Col md="4">
              <h3 className="text-20 font-bold">Approach point 3</h3>
              <p className="max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias quo quae unde? Nisi ratione laudantium inventore
                voluptatem. Totam, aspernatur tempora, sit nesciunt odit eius
                alias quod at voluptatem nemo maxime?
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="my-32 md:my-64">
        <Container>
          <div className="bg-white p-8 md:py-32 md:px-16 rounded-lg text-black text-center">
            <h2 className="text-40 font-bold mb-4">Show it, dont tell</h2>
            <div className="richtext max-w-lg m-auto">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem praesentium mollitia, quae, alias pariatur natus,
                asperiores facere quisquam similique esse error perspiciatis
                aliquid. Doloremque, iure repellat animi doloribus blanditiis
                dolore.
              </p>
            </div>
            <Link href="/cases">
              <span className="inline-block mt-8 underline underline-offset-2">
                See our cases
              </span>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
