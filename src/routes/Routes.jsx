import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import HomePage from "../pages/HomePage";
import ROI from "../pages/ROI";
import Contact from "../pages/Contact";
import Soccer from "../pages/Soccer";
import FAQ from "../pages/FAQ";
import Pricing from "../pages/Pricing";
import CSGO from "../pages/CSGO";
import Valorant from "../pages/Valorant";
import MoreGame from "../pages/MoreGame";
import Blogs from "../pages/Blogs";
import ShowBlogs from "../pages/ShowBlogs";
import PrivacyPolicy from "../components/shared/PrivacyPolicy";
import AboutUs from "../pages/AboutUs";
import MembershipTerms from "../components/shared/MembershipTerms";
import GDPR from "../components/shared/GDPR";
import CookieDeclaration from "../components/shared/CookieDeclaration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/roi",
        element: <ROI />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/soccer",
        element: <Soccer />,
      },
      {
        path: "/cs-go",
        element: <CSGO />,
      },
      {
        path: "/valorant",
        element: <Valorant />,
      },
      {
        path: "/more-game",
        element: <MoreGame />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blog/:id",
        element: <ShowBlogs />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/membership-terms-and-conditions",
        element: <MembershipTerms />,
      },
      {
        path: "/gdpr",
        element: <GDPR />,
      },
      {
        path: "/cookie-declaration",
        element: <CookieDeclaration />,
      },
    ],
  },
]);

export default router;
