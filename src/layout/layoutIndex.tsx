import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/layout/LayoutIndex.css";

import Footer from "./footer/footerIndex";
 import Navbar from "./navbar/navbarIndex";
// import NavbarFade from "./navBar/NavbarFade";
import NavbarTestBox from "./navbar/NavbarTestBox";

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const routeClass = (() => {
    switch (location.pathname) {
      case "/":
        return "home";
      case "/about-us":
        return "about";
      case "/services":
        return "services";
      default:
        return "";
    }
  })();
  console.log(routeClass);

  return (
    <div className={`route-specific-color-wrapper `}>
      {/* navber box starrt */}
      <div className="navbar-wrapper-box">
        
        <div className="general-size-wrap">
          {" "}
          {/* <NavbarFade> */}
          <Navbar/>
            {/* <NavbarTestBox /> */}
          {/* </NavbarFade> */}
        </div>
      </div>
      {/* navber box end */}
      {/* children wraaper box start */}
      <div className="children-wrapper-box">
        {/* lorem45000 */}
        {children}
      </div>
      {/* children wraaper box end */}
      {/* footer start */}
      <div className="footer-wrapper-start">
        {" "}
        <div className="general-size-wrap"></div>
        <Footer />
      </div>
      {/* footer end */}
    </div>
  );
};

export default Layout;
