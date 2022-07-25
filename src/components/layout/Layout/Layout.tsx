import { memo, ReactNode } from "react";
import { PageTransition, GridDebug } from "@layout";

import { Loader } from "@molecules";
import { PageHeader, PageFooter } from "@renderings";

interface LayoutProps {
  children: ReactNode;
}

const Layout = memo(({ children }: LayoutProps) => (
  <>
    <PageHeader />
    <PageTransition>
      <div>
        <main>{children}</main>
        {/* <PageFooter /> */}
      </div>
    </PageTransition>
    <Loader />
    <GridDebug />
  </>
));

export { Layout };
