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
      <Link href="/about">
        <span className="mt-8 inline-block underline underline-offset-4 opacity-0 group-hover:opacity-100 duration-300">
          Learn more about our technology & Services
        </span>
      </Link>
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
                Join the fun
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
              src="https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1810&q=80"
            />
          </div>
        </Container>
      </section>

      <section className="my-32 md:my-64">
        <Container>
          <Row>
            <Col md="6">
              <h2 className="text-24 md:text-40 font-bold mb-4 max-w-xl">
                Open positions
              </h2>
              <div className="max-w-md">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Rerum, magnam quae dolore voluptatibus, corrupti culpa facilis
                  non esse omnis quibusdam maiores debitis a nesciunt tenetur
                  itaque aliquam velit! Nostrum, dolorum.
                </p>
              </div>
              <Link href="#contact">
                <span className="inline-block underline underline-offset-2 mt-4">
                  Get in touch
                </span>
              </Link>
            </Col>
            <Col md="6" className="space-y-8">
              <Link href="/position">
                <span className="bg-white rounded-lg p-8 text-black block">
                  <h2 className="font-bold">Senior Sitecore developer</h2>
                  <p>Full time</p>
                </span>
              </Link>
              <Link href="/position">
                <span className="bg-white rounded-lg p-8 text-black block">
                  <h2 className="font-bold">Fullstack Architect</h2>
                  <p>Full time</p>
                </span>
              </Link>
              <Link href="/position">
                <span className="bg-white rounded-lg p-8 text-black block">
                  <h2 className="font-bold">React developer</h2>
                  <p>Full time</p>
                </span>
              </Link>
              <Link href="/position">
                <span className="bg-white rounded-lg p-8 text-black block">
                  <h2 className="font-bold">Project Manager</h2>
                  <p>Full time</p>
                </span>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="my-32 md:my-64">
        <Container>
          <h2 className="text-24 md:text-40 font-bold mb-16 md:mb-32 max-w-xl">
            Our benefits and work/life values Lorem ipsum dolor sit amet
            consectetur, adipisicing elit.
          </h2>

          <Row className="gap-y-16">
            <Col md="4" lg="3">
              <h3 className="text-20 font-bold">Benefit</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias quo quae unde? Nisi ratione laudantium inventore
                voluptatem. Totam, aspernatur tempora, sit nesciunt odit eius
                alias quod at voluptatem nemo maxime?
              </p>
            </Col>
            <Col md="4" lg="3">
              <h3 className="text-20 font-bold">Benefit</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias quo quae unde? Nisi ratione laudantium inventore
                voluptatem. Totam, aspernatur tempora, sit nesciunt odit eius
                alias quod at voluptatem nemo maxime?
              </p>
            </Col>
            <Col md="4" lg="3">
              <h3 className="text-20 font-bold">Benefit</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias quo quae unde? Nisi ratione laudantium inventore
                voluptatem. Totam, aspernatur tempora, sit nesciunt odit eius
                alias quod at voluptatem nemo maxime?
              </p>
            </Col>
            <Col md="4" lg="3">
              <h3 className="text-20 font-bold">Benefit</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias quo quae unde? Nisi ratione laudantium inventore
                voluptatem. Totam, aspernatur tempora, sit nesciunt odit eius
                alias quod at voluptatem nemo maxime?
              </p>
            </Col>
            <Col md="4" lg="3">
              <h3 className="text-20 font-bold">Benefit</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias quo quae unde? Nisi ratione laudantium inventore
                voluptatem. Totam, aspernatur tempora, sit nesciunt odit eius
                alias quod at voluptatem nemo maxime?
              </p>
            </Col>
            <Col md="4" lg="3">
              <h3 className="text-20 font-bold">Benefit</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias quo quae unde? Nisi ratione laudantium inventore
                voluptatem. Totam, aspernatur tempora, sit nesciunt odit eius
                alias quod at voluptatem nemo maxime?
              </p>
            </Col>
            <Col md="4" lg="3">
              <h3 className="text-20 font-bold">Benefit</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias quo quae unde? Nisi ratione laudantium inventore
                voluptatem. Totam, aspernatur tempora, sit nesciunt odit eius
                alias quod at voluptatem nemo maxime?
              </p>
            </Col>
            <Col md="4" lg="3">
              <h3 className="text-20 font-bold">Benefit</h3>
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
    </>
  );
}
