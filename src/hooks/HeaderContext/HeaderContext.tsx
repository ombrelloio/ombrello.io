/**
 * NOT BEING USED CURRENTLY
 */
import React, { createContext, useContext, useMemo, useState } from "react";

type ContextType =
  | [string, React.Dispatch<React.SetStateAction<string>>]
  | undefined;

const HeaderContext = createContext<ContextType>(undefined);

export const ThemeProvider = (props: any) => {
  const [theme, setTheme] = useState();
  const value = useMemo(() => {
    return [theme, setTheme];
  }, [theme]);

  return <HeaderContext.Provider value={value} {...props} />;
};

export const useThemeContext = () => {
  const context = useContext(HeaderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a Provider");
  }
  return context;
};
