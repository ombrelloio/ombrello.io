import { memo, ReactNode } from "react";
import { GridDebug } from "@layout";
import { Donation } from "@molecules";

import { PageHeader, PageFooter } from "@renderings";

const Layout = memo(({ children }: { children: ReactNode }) => {
  return (
    <>
      <PageHeader />
      <main>{children}</main>
      <PageFooter />
      <Donation />
      <GridDebug />
    </>
  );
});

export { Layout };
