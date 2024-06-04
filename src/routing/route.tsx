import { createBrowserRouter } from "react-router-dom";
import { Location } from "../frontend/pages/location";
import { Team } from "../frontend/pages/team";
import { FeatureJob } from "../frontend/pages/featureJob";
import { JoinUs } from "../frontend/pages/joinUs";
import { LoginIn } from "../frontend/pages/loginIn";
import App from "../App";
import { Layout } from "../frontend/layout/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/login",
        element: <LoginIn />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        index: true,
        path: "/location",
        element: <Location />,
      },
      {
        path: "/joinUs",
        element: <JoinUs />,
      },
      {
        path: "featureJob",
        element: <FeatureJob />,
      },
    ],
  },
]);
