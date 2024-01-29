"use client";

import { PropsWithChildren } from "react";

// providers
import { ThemeProvider } from "./ThemeProvider";
import ReactQueryProvider from "./ReactQueryProvider";
import ReduxProvider from "./ReduxProvider";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="theme"
    >
      <ReduxProvider>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </ReduxProvider>
    </ThemeProvider>
  );
};

export default Providers;
