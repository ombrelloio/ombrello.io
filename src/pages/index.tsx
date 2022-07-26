import React from "react";
import { NextSeo } from "next-seo";
import { Container, Row, Col } from "@layout";
import { Image, Link } from "@atoms";

type PageProps = {};

const Service = ({ headline }: { headline: string }) => (
  <div className="group">
    <div className="relative aspect-square">
      <Image
        layout="fill"
        object-fit="cover"
        object-position="center"
        src="https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1810&q=80"
      />
    </div>
    <div className="mt-4">
      <h2 className="text-20 font-bold mb-2">{headline}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
        reprehenderit sunt iste? Harum voluptas amet nam enim fuga perferendis.
      </p>
      <Link href="/about">
        <a className="mt-8 inline-block underline underline-offset-4 opacity-0 group-hover:opacity-100 duration-300">
          Learn more about our technology & Services
        </a>
      </Link>
    </div>
  </div>
);

export default function Page() {
  return (
    <>
      <NextSeo title="Home" />
      <section className="my-32 md:my-64 text-center">
        <Container>
          <h1 className="text-40 md:text-120 font-bold">
            Your Next <br />
            Digital Adventure
          </h1>
          <p className="opacity-50 mt-4 md:mt-6 max-w-lg m-auto">
            We´re a Technology Studio filled to the brim with digital artisans,
            ready to help companies shift forward and move to the next level
          </p>
        </Container>
      </section>

      <section>
        <Container>
          <div className="relative aspect-video">
            <Image
              layout="fill"
              object-fit="cover"
              object-position="center"
              src="https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1810&q=80"
            />
          </div>
        </Container>
      </section>

      <section className="my-32 md:my-64">
        <Container>
          <Row className="justify-between gap-y-12">
            <Col md="5">
              <h2 className="text-24 md:text-40 font-bold">
                We combine years of experience and award winning implementations
                with being genuinely nice people.
              </h2>
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
              <Link href="/about">
                <a className="mt-8 inline-block underline underline-offset-4">
                  Learn more
                </a>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="my-32 md:my-64">
        <Container>
          <Row className="justify-between gap-y-16">
            <Col md="5">
              <Service headline="Service" />
            </Col>
            <Col md="5" className="md:mt-32">
              <Service headline="Technology" />
            </Col>
            <Col md="5" className="md:-mt-32">
              <Service headline="Service" />
            </Col>

            <Col md="5">
              <Service headline="Service" />
            </Col>

            <Col md="5" className="md:-mt-32">
              <Service headline="Technology" />
            </Col>

            <Col md="5">
              <Service headline="Service" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="my-32 md:my-64">
        <Container>
          <div className="bg-white p-8 md:py-32 md:px-16 rounded-lg text-black text-center">
            <h2 className="text-40 font-bold mb-4">Career at Ombrello</h2>
            <div className="richtext max-w-lg m-auto">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem praesentium mollitia, quae, alias pariatur natus,
                asperiores facere quisquam similique esse error perspiciatis
                aliquid. Doloremque, iure repellat animi doloribus blanditiis
                dolore.
              </p>
            </div>
            <Link href="/career">
              <a className="inline-block mt-8 underline underline-offset-2">
                Learn more
              </a>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
