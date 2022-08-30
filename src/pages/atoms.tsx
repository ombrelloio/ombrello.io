import { SeoWrapper } from "@app/components/layout/SeoWrapper/SeoWrapper";
import { PageContextWrapper } from "@app/hooks/PageContext/PageContext";
import { Layout } from "@layout";
import { HGPageProps } from "@types";
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
