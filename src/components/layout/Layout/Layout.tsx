import { memo, ReactNode } from "react";
import { GridDebug } from "@layout";

import { PageHeader, PageFooter } from "@renderings";

interface LayoutProps {
  children: ReactNode;
}

const Layout = memo(({ children }: LayoutProps) => (
  <>
    <PageHeader />
    <main>{children}</main>
    <PageFooter />
    <GridDebug />
  </>
));

export { Layout };
