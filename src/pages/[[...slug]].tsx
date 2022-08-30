import React, { useEffect } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { Layout, Renderings } from "@layout";
import { HGPageProps } from "@types";
import { PageContextWrapper } from "@app/hooks/PageContext/PageContext";
import { SeoWrapper } from "@app/components/layout/SeoWrapper/SeoWrapper";
import { arrPageThemes, defaultTheme, prefix } from "@app/constants";
import { getPage, getPages } from "../api";

export default function Page({ page, siteMenu, siteFooter }: HGPageProps) {
  const { seo, pageTheme } = page;
  /**
   * THEME CLASS
   *
   * Check for each page what the pageTheme is
   * loop through theme options in constants and
   * add new active theme class
   * */
  useEffect(() => {
    const activeTheme = pageTheme?.toLowerCase() || defaultTheme;
    const bodyClass = document.body.classList;
    arrPageThemes.forEach((theme) => {
      if (`${prefix}${theme}` !== `${prefix}${activeTheme}`) {
        bodyClass.remove(`${prefix}${theme}`);
      }
    });
    bodyClass.add(`${prefix}${activeTheme}`);
  });

  return (
    <PageContextWrapper value={{ page, siteMenu, siteFooter }}>
      {seo && <SeoWrapper data={seo} />}
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
    revalidate: 5,
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
