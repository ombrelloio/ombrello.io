import { SeoWrapper } from "@app/components/layout/SeoWrapper/SeoWrapper";
import { PageContextWrapper } from "@app/hooks/PageContext/PageContext";
import { Col, Container, Layout, Row } from "@layout";
import { HGPageProps } from "@types";
import { NextSeo } from "next-seo";
import React from "react";

export default function StyleGuideAtoms({
  page,
  siteMenu,
  siteFooter,
}: HGPageProps) {
  const { seo } = page || {};
  return (
    <PageContextWrapper value={{ page, siteMenu, siteFooter }}>
      {seo && <SeoWrapper data={seo} />}
      <Layout>
        <p>Atoms</p>
      </Layout>
    </PageContextWrapper>
  );
}
