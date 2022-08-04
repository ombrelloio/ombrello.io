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
              <h1 className="text-24 md:text-120 font-bold mb-16">About us</h1>
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
          <h2 className="text-24 md:text-40 font-bold mb-16 md:mb-32 max-w-xl">
            Our values Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h2>

          <Row className="gap-y-16">
            <Col md="4" lg="3">
              <h3 className="text-20 font-bold">Value</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias quo quae unde? Nisi ratione laudantium inventore
                voluptatem. Totam, aspernatur tempora, sit nesciunt odit eius
                alias quod at voluptatem nemo maxime?
              </p>
            </Col>
            <Col md="4" lg="3">
              <h3 className="text-20 font-bold">Value</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias quo quae unde? Nisi ratione laudantium inventore
                voluptatem. Totam, aspernatur tempora, sit nesciunt odit eius
                alias quod at voluptatem nemo maxime?
              </p>
            </Col>
            <Col md="4" lg="3">
              <h3 className="text-20 font-bold">Value</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias quo quae unde? Nisi ratione laudantium inventore
                voluptatem. Totam, aspernatur tempora, sit nesciunt odit eius
                alias quod at voluptatem nemo maxime?
              </p>
            </Col>
            <Col md="4" lg="3">
              <h3 className="text-20 font-bold">Value</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias quo quae unde? Nisi ratione laudantium inventore
                voluptatem. Totam, aspernatur tempora, sit nesciunt odit eius
                alias quod at voluptatem nemo maxime?
              </p>
            </Col>
            <Col md="4" lg="3">
              <h3 className="text-20 font-bold">Value</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias quo quae unde? Nisi ratione laudantium inventore
                voluptatem. Totam, aspernatur tempora, sit nesciunt odit eius
                alias quod at voluptatem nemo maxime?
              </p>
            </Col>
            <Col md="4" lg="3">
              <h3 className="text-20 font-bold">Value</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias quo quae unde? Nisi ratione laudantium inventore
                voluptatem. Totam, aspernatur tempora, sit nesciunt odit eius
                alias quod at voluptatem nemo maxime?
              </p>
            </Col>
            <Col md="4" lg="3">
              <h3 className="text-20 font-bold">Value</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias quo quae unde? Nisi ratione laudantium inventore
                voluptatem. Totam, aspernatur tempora, sit nesciunt odit eius
                alias quod at voluptatem nemo maxime?
              </p>
            </Col>
            <Col md="4" lg="3">
              <h3 className="text-20 font-bold">Value</h3>
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
            Meet the team Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Nobis totam, alias numquam perferendis blanditiis.
          </h2>

          <Row className="gap-y-16">
            <Col md="4" lg="3">
              <div className="relative aspect-square mb-4">
                <Image
                  layout="fill"
                  object-fit="cover"
                  object-position="center"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
              </div>
              <h3 className="text-20 font-bold">Name</h3>
              <p>Position</p>
            </Col>
            <Col md="4" lg="3">
              <div className="relative aspect-square mb-4">
                <Image
                  layout="fill"
                  object-fit="cover"
                  object-position="center"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
              </div>
              <h3 className="text-20 font-bold">Name</h3>
              <p>Position</p>
            </Col>
            <Col md="4" lg="3">
              <div className="relative aspect-square mb-4">
                <Image
                  layout="fill"
                  object-fit="cover"
                  object-position="center"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
              </div>
              <h3 className="text-20 font-bold">Name</h3>
              <p>Position</p>
            </Col>
            <Col md="4" lg="3">
              <div className="relative aspect-square mb-4">
                <Image
                  layout="fill"
                  object-fit="cover"
                  object-position="center"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
              </div>
              <h3 className="text-20 font-bold">Name</h3>
              <p>Position</p>
            </Col>
            <Col md="4" lg="3">
              <div className="relative aspect-square mb-4">
                <Image
                  layout="fill"
                  object-fit="cover"
                  object-position="center"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
              </div>
              <h3 className="text-20 font-bold">Name</h3>
              <p>Position</p>
            </Col>
            <Col md="4" lg="3">
              <div className="relative aspect-square mb-4">
                <Image
                  layout="fill"
                  object-fit="cover"
                  object-position="center"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
              </div>
              <h3 className="text-20 font-bold">Name</h3>
              <p>Position</p>
            </Col>
            <Col md="4" lg="3">
              <div className="relative aspect-square mb-4">
                <Image
                  layout="fill"
                  object-fit="cover"
                  object-position="center"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
              </div>
              <h3 className="text-20 font-bold">Name</h3>
              <p>Position</p>
            </Col>
            <Col md="4" lg="3">
              <div className="relative aspect-square mb-4">
                <Image
                  layout="fill"
                  object-fit="cover"
                  object-position="center"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
              </div>
              <h3 className="text-20 font-bold">Name</h3>
              <p>Position</p>
            </Col>
            <Col md="4" lg="3">
              <div className="relative aspect-square mb-4">
                <Image
                  layout="fill"
                  object-fit="cover"
                  object-position="center"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
              </div>
              <h3 className="text-20 font-bold">Name</h3>
              <p>Position</p>
            </Col>
            <Col md="4" lg="3">
              <div className="relative aspect-square mb-4">
                <Image
                  layout="fill"
                  object-fit="cover"
                  object-position="center"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
              </div>
              <h3 className="text-20 font-bold">Name</h3>
              <p>Position</p>
            </Col>
            <Col md="4" lg="3">
              <div className="relative aspect-square mb-4">
                <Image
                  layout="fill"
                  object-fit="cover"
                  object-position="center"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
              </div>
              <h3 className="text-20 font-bold">Name</h3>
              <p>Position</p>
            </Col>
            <Col md="4" lg="3">
              <div className="relative aspect-square mb-4">
                <Image
                  layout="fill"
                  object-fit="cover"
                  object-position="center"
                  src="https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1810&q=80"
                />
              </div>
              <h3 className="text-20 font-bold">Name</h3>
              <p>Position</p>
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
              <span className="inline-block mt-8 underline underline-offset-2">
                Learn more
              </span>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
