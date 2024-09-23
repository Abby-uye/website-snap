import Layout from "../layout/layoutIndex";
import Home from "../pages/homeIndex";
import AboutUsHomePage from "../pages/aboutUsIndex";
import RavenBlogPage from "../pages/ravenBlogIndex";
import CareersPage from "../pages/careeersIndex";
import SecurityPage from "../pages/securityIndex";
import PrivacyPolicyPage from "../pages/privacyPlolicyIndex";
import TermsAndConditionPage from "../pages/termsAndConditionsPageIndex";
// import MenuItem from "../layout/navBar/navbarMenuItems";
// import {menuItems} from "../layout/navBar/navbardata";


export const Routes = [
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/about-us",
    element: <AboutUsHomePage />,
  },
  {
    path: "/blog",
    element: <RavenBlogPage />,
  },
  {
    path: "/careers",
    element: <CareersPage/>,
  },
  {
    path: "/security",
    element: <SecurityPage/>,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicyPage/>,
  },
  {
    path: "/terms-and-conditions",
    element: <TermsAndConditionPage/>,
  },
];
