import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";
import { RouteObject } from "react-router";

import SuspenseLoader from "../shared/ui/suspense-loader/suspense-loader";
import Login from "../pages/login/login";

const Loader = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// pages
// const Ipo = Loader(lazy(() => import("../pages/ipo")));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Login/>,
  },

];

export default routes;
