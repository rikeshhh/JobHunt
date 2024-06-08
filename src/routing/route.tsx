import { createBrowserRouter } from "react-router-dom";
import { Location } from "../frontend/pages/location";
import { Team } from "../frontend/pages/team";
import { FeatureJob } from "../frontend/pages/featureJob";
import { JoinUs } from "../frontend/pages/joinUs";
import { Layout } from "../frontend/layout/layout";
import { HeroSection } from "../frontend/pages/heroSection";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/heroSection",
        element: <HeroSection />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/location",
        element: <Location />,
      },
      {
        path: "/joinUs",
        element: <JoinUs />,
      },
      {
        path: "/featureJob",
        element: <FeatureJob />,
      },
    ],
  },
]);
