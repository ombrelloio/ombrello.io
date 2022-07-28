import React from "react";
import { NextSeo } from "next-seo";
import { Container } from "@layout";

type PageProps = {};

export default function Page() {
  return (
    <>
      <NextSeo title="Home" />
      <section className="flex items-center text-center h-screen py-6">
        <Container>
          <h1 className="text-40 md:text-62 lg:text-120">
            Your Next <br />
            Digital Adventure
          </h1>
          <p className="text-14 md:text-16 opacity-50 mt-4 md:mt-6 max-w-lg m-auto">
            We´re a Technology Studio filled to the brim with digital artisans,
            ready to help companies shift forward and move to the next level
          </p>
        </Container>
      </section>
    </>
  );
}
