import MainWrapper from "@/layouts/main-wrapper";
import React, { Suspense } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("@/pages/home"));

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<MainWrapper />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
