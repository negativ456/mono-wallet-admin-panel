import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "app/providers/router/config/routeConfig";

export const AppRouter = () => {
  return (
    <Suspense>
      <Routes>
        {routeConfig.map((route) => (
          <Route key={route.path} path={route.path} element={route.element}>
            {route.children?.map((child) => (
              <Route key={child.path} path={child.path} element={child.element}>
                {child.children?.map((child2) => (
                  <Route
                    key={child2.path}
                    path={child2.path}
                    element={child2.element}
                  />
                ))}
              </Route>
            ))}
          </Route>
        ))}
      </Routes>
    </Suspense>
  );
};
