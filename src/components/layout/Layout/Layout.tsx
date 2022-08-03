import { memo, ReactNode } from "react";
import { GridDebug } from "@layout";

import { PageHeader, PageFooter } from "@renderings";
import { LayoutProps, PageFooterProps, PageProps } from "@types";

const Layout = memo(({ children, menu }: LayoutProps) => {
  return (
    <>
      <PageHeader {...menu.siteMenu} />
      <main>{children}</main>
      <PageFooter {...menu.siteFooter} />
      <GridDebug />
    </>
  );
});

export { Layout };
