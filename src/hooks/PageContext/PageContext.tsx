import React, { createContext, ReactNode, useContext } from "react";
import { PageProps } from "@types";

export const PageContext = createContext<PageProps | null>(null);

export const PageContextWrapper = ({
  children,
  value,
}: {
  value: PageProps;
  children: ReactNode;
}) => <PageContext.Provider value={value}>{children}</PageContext.Provider>;

export function usePageContext() {
  const context = React.useContext(PageContext);
  if (context === undefined) {
    throw new Error("usePageContext must be used within a PageContextProvider");
  }
  return context;
}

export default () => useContext(PageContext);
