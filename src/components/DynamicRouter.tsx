import React from "react";
import { routes, Route } from "../config/router.config";
import { createBrowserRouter, NavLink, RouterProvider } from "react-router";

const DynamicRouter = () => {
  const router = createBrowserRouter(
    routes.map((route: Route) => ({
      path: route.path,
      element: <route.element />,
    }))
  );

  return (
    <div>
      <nav>
        <ul>
          {routes.map((route) => (
            <li key={route.path}>
              <NavLink
                to={route.path}
                className={({ isActive }) => (isActive ? "selected" : "")}
                end={route.path === "/"}
              >
                {route.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <RouterProvider router={router} />
    </div>
  );
};

export default DynamicRouter;
