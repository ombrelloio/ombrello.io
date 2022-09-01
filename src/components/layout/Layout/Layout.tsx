import { memo, ReactNode } from "react";
import { GridDebug } from "@layout";
// import { Donation } from "@molecules";

import { PageHeader, PageFooter } from "@renderings";

const Layout = memo(({ children }: { children: ReactNode }) => {
  const isDevelopment = process.env.NODE_ENV === "development";
  return (
    <>
      <PageHeader />
      <main>{children}</main>
      <PageFooter />
      {/* <Donation /> */}
      {isDevelopment && <GridDebug />}
    </>
  );
});

export { Layout };
