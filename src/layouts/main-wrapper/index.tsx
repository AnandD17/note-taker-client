import { ThemeProvider } from "@/theme/theme-provider";
import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const MainWrapper = (props: Props) => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="min-h-screen">
        <Outlet />
      </div>
    </ThemeProvider>
  );
};

export default MainWrapper;
