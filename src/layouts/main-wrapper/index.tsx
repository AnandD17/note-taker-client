import { ThemeProvider } from "@/theme/theme-provider";
import { Outlet } from "react-router-dom";

const MainWrapper = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="min-h-screen">
        <Outlet />
      </div>
    </ThemeProvider>
  );
};

export default MainWrapper;
