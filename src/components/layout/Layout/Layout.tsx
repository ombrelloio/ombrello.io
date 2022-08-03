import { memo, ReactNode } from "react";
import { GridDebug } from "@layout";

import { PageHeader, PageFooter } from "@renderings";

interface LayoutProps {
  children: ReactNode;
  menu: unknown;
}

const Layout = memo(({ children, menu }: LayoutProps) => (
  <>
    <PageHeader menu={menu} />
    <main>{children}</main>
    <PageFooter />
    <GridDebug />
  </>
));

export { Layout };
