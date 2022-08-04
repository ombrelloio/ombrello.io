import { memo, ReactNode } from "react";
import { GridDebug } from "@layout";

import { PageHeader, PageFooter } from "@renderings";

const Layout = memo(({ children }: { children: ReactNode }) => {
  return (
    <>
      <PageHeader />
      <main>{children}</main>
      <PageFooter />
      <GridDebug />
    </>
  );
});

export { Layout };
