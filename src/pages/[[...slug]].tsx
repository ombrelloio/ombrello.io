import React, { useEffect } from "react";
import { NextSeo } from "next-seo";
import { GetStaticProps, GetStaticPaths } from "next";
import { Renderings } from "@layout";
import { PageProps } from "@types";
import { getPage, getPages } from "../api";

export default function Page({ seo, renderings, pageColors }: PageProps) {
  useEffect(() => {
    const root = document.documentElement;
    const cssVars = [
      "bodyBackground",
      "bodyTextColor",
      "headerBackground",
      "headerTextColor",
    ];

    for (let i = 0; i < cssVars.length; i += 1) {
      const cssVar = cssVars[i];

      if (
        pageColors &&
        Object.prototype.hasOwnProperty.call(pageColors, cssVar)
      ) {
        // @ts-ignore: Can't make typescript approve this!
        if (pageColors && pageColors[cssVar]) {
          // @ts-ignore: Can't make typescript approve this!
          root.style.setProperty(`--${cssVar}`, pageColors[cssVar].hex);
        }
      } else {
        root.style.removeProperty(`--${cssVar}`);
      }
    }
  });
  return (
    <>
      <NextSeo
        title={seo.title}
        description={seo.description}
        twitter={{
          handle: "BlixtDunder",
          site: "https://www.blixtdunder.com/",
          cardType: "summary_large_image",
        }}
        openGraph={{
          title: seo.title,
          description: seo.description,
          images: [
            {
              url: seo.image?.url || "",
              width: seo.image?.width,
              height: seo.image?.height,
              alt: seo.image?.caption,
            },
          ],
        }}
        noindex={seo.noIndex}
      />
      <Renderings list={renderings} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as Array<{}>;
  const data = await getPage(slug ? slug.join("/") : "home");

  if (data.page) {
    return {
      props: data.page,
      revalidate: 5,
      notFound: false,
    };
  }
  return {
    notFound: true,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getPages();

  return {
    paths: data.pages.map((page: any) => {
      return {
        params: {
          slug: [page.slug === "home" ? "" : page.slug],
        },
      };
    }),
    fallback: "blocking",
  };
};
