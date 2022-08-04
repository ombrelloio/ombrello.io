import React, { createContext, ReactNode, useContext } from "react";
import { HGPageProps } from "@types";

export const PageContext = createContext<HGPageProps | null>(null);

export const PageContextWrapper = ({
  children,
  value,
}: {
  value: HGPageProps;
  children: ReactNode;
}) => <PageContext.Provider value={value}>{children}</PageContext.Provider>;

export function usePageContext() {
  const context = useContext(PageContext);

  if (context === undefined) {
    throw new Error("usePageContext must be used within a PageContextProvider");
  }
  return context;
}

export default () => useContext(PageContext);
