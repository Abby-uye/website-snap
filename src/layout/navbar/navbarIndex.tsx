import { heroIcons } from "../../assets/heroIcons";
import { globalIcons } from "../../assets/globalIcons";

import "../../styles/navBarStyle//navbarIndex.css";
import { navbarIcons } from "../../assets/layoutAssets/navbarIcons";
import { RavenButton } from "@ravenpay/raven-bank-ui";
import { useOnClickOutside } from "../../helper/UseOnClickOutside";
import { useState } from "react";
import { linkList } from "./navbardata";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [showDrop, setShowDrop] = useState("");
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleMobileItems, setToggleMobileItems] = useState(false);
  const [currentChild, setCurrentChild] = useState<number | null>(null);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index); // Set the active index on mouse over
  };
  const handleClick = (index: number) => {
    if (currentChild === index) {
      setCurrentChild(null);
    } else {
      setCurrentChild(index);
    }
    setToggleMobileItems(!toggleMobileItems);
  };
  const handleMouseLeave = () => {
    setActiveIndex(null); // Reset the active index on mouse leave
  };
  const testRef = useOnClickOutside(() => {
    showDrop && setShowDrop("");
  });
  return (
    <div className="navbar-general-wrap-container-holder">
      <div className="navbar-img-box">
        <figure>{heroIcons.ravenLogo}</figure>
      </div>
      <div className="raven-website-navbar-container-wrap-cont-mobile">
        <div className="fabar">
          {/* menu box start */}
          <div
            onClick={() => {
              setToggleMenu(!toggleMenu);
            }}
            className="menu-box"
          >
            <div className={`line ${toggleMenu ? "line-times" : ""}`}></div>
          </div>
          {/* menu box end */}
          {/*nav bar list box start */}
          <div
            className={`nav-bar-list ${toggleMenu ? "nav-bar-list-show" : ""}`}
          >
            <div className="navbar-img-box">
              <figure>{heroIcons.ravenLogo}</figure>
            </div>
            <div className="navbar-items-dropdown-mobile-container"
           
            >
              {linkList?.map((child, index) => {
                const { name, icon, options,  } = child;
                console.log("this is child " + index + name);
                return (
                  <div
                    key={index}
                    onClick={() => handleClick(index)}
                    className={`link-item ${currentChild?"current-child":""}`}
                  >
                    <p className="name">{name}</p>
                    { icon && (
                      <>
                        <figure className="img-box">
                        {currentChild === index ? globalIcons.arrowUp : globalIcons.arrowDown}
                        </figure>
                      </>
                    )}
                    <div
                    className="current-child-options"
                    >
                      <div className="the-option">
                        {""}
                        {options?.map((child, i) => {
                          const { label, description, link } =
                            child;
                          return (
                            <div
                              key={i}
                              onClick={() => {
                                navigate(link);
                              }}
                              className={`drop-box ${
                              
                                  activeIndex === i
                                  ? "active"
                                  : ""
                              }`} 
                              
                            >
                            
                              <div className="title-text-box">
                                <div className="title-and-arrow">
                                  <p className="title">{label}</p>
                                  <>
                                    <figure className="arrow-up">
                                      {navbarIcons.arowUp}
                                    </figure>
                                  </>
                                </div>

                                <p className="text">{description}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                     
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/*nav bar list box end */}
        </div>
        {/* nav bar end */}
        {/* main content start */}
        <div className="main-content"></div>
        {/* main content end */}
      </div>

      <div ref={testRef} className="navbar-item-container">
        {linkList?.map((child, index) => {
          const { name, icon, options, bigOption } = child;
          return (
            <div
              onClick={() => {
                name === showDrop ? setShowDrop("") : setShowDrop(name);
              }}
              key={index}
              className="link-item"
            >
              <p className="name">{name}</p>
              {icon && (
                <>
                  <figure className="img-box">{globalIcons.arrowDown}</figure>
                </>
              )}
              <div
                className={`drop-box-wrapper ${
                  bigOption ? "drop-box-wrapper-big" : ""
                }  ${name === showDrop ? "drop-box-wrapper-anime" : ""}`}
              >
                <div className="top-wrap">
                  {""}
                  {options?.map((child, i) => {
                    const { color, icon, label, description, link } = child;
                    return (
                      <div
                        key={i}
                        onClick={() => {
                          navigate(link);
                        }}
                        className={`drop-box ${
                          bigOption
                            ? activeIndex === i
                              ? "active-big"
                              : ""
                            : activeIndex === i
                            ? "active"
                            : ""
                        }`} // Add 'active' class if index matches activeIndex
                        onMouseEnter={() => handleMouseEnter(i)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {/* icon box start */}
                        <div className="icon-box">
                          <>
                            <figure>{icon}</figure>
                          </>
                        </div>
                        {/* icon box end */}
                        <div className="title-text-box">
                          <div className="title-and-arrow">
                            <p className="title">{label}</p>
                            <>
                              <figure className="arrow-up">
                                {navbarIcons.arowUp}
                              </figure>
                            </>
                          </div>

                          <p className="text">{description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {bigOption && (
                  <>
                    <div className="blog-learn-box">
                      <p className="text">
                        Learn more about Raven Bank and Financial Management.
                      </p>

                      <p className="link">
                        Our Blog
                        <span>
                          <figure>{navbarIcons.arowUp}</figure>
                        </span>
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="action-box">
        
        <div className="raven-botton">
        <RavenButton
          color="white-light"
          label="Sign In"
          textColor="deep-green-light"
          className="raven-botton-button"
        />
        </div>
        <RavenButton color="green-light" label="Get Started" />
      </div>
    </div>
  );
};
export default Navbar;
