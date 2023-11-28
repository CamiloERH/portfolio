import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import FallbackLoading from "./components/loader/FallbackLoading";
import { publicRoutes } from "./routes";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Suspense fallback={<FallbackLoading />}>
      <Routes>
        <Route element={<Layout />}>
          {
            publicRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))
          }
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
