import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { darkTheme } from "../../configs";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  );
};

export default Layout;
