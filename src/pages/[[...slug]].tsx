import React from "react";
import { NextSeo } from "next-seo";
import { GetStaticProps, GetStaticPaths } from "next";
import { Layout, Renderings } from "@layout";
import { HGPageProps } from "@types";
import { PageContextWrapper } from "@app/hooks/PageContext/PageContext";
import { getPage, getPages } from "../api";

export default function Page({ page, siteMenu, siteFooter }: HGPageProps) {
  const { seo } = page;
  return (
    <PageContextWrapper value={{ page, siteMenu, siteFooter }}>
      {seo && (
        <NextSeo
          title={seo.title}
          description={seo.description}
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
      )}
      <Layout>
        <Renderings />
      </Layout>
    </PageContextWrapper>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as Array<{}>;
  const data = await getPage(slug ? slug.join("/") : "home");

  if (data.page) {
    return {
      props: {
        page: data.page,
        siteMenu: data.siteMenu,
        siteFooter: data.siteFooter,
      },
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
