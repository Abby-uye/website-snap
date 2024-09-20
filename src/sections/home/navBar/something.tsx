// import { heroIcons } from "../../assets/heroIcons";
// import { globalIcons } from "../../assets/globalIcons";

// import { navbarIcons } from "../../assets/layoutAssets/navbarIcons";
// import iphone from "../../assets/iPhone.png";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";
// import { RavenButton, RavenDropDown } from "@ravenpay/raven-bank-ui";
// import React, { useState } from "react";
// import { constants } from "buffer";
// import { aboutUsIcons } from "../../assets/aboutUsAssets/aboutUsIconsIndex";
// import { menuItems } from "./navbardata";
// const NavBar = () => {
//   const [isPersonalOpen, setIsPersonalOpen] = useState(false);

//   const [isSideBarOpen, setIsSideBarOpen] = useState(false);
//   const [isFabarOpen, setIsFabarOpen] = useState(false);
//   const [forBusinessOpen, setForBusinessOpen] = useState(false);
//   const [companyOpen, setCompanyOpen] = useState(false);
//   const [isChvronOpen, setIsChevronOpen] = useState(false);
//   const [isPersonalDesktopOpen, setIsPersonalDesktopOpen] = useState(false);
//   const [isCompanyDesktopOpen, setIsCompanyDesktopOpen] = useState(false);
//   const [forBusinessDesktopOpen, setForBusinessDesktopOpen] = useState(false);

//   // const toggleState = (setStateFunction:React.FC, value:boolean) => {
//   //   setStateFunction(value);
//   // };

//   const togglePersonalDropdown = () => setIsPersonalOpen(!isPersonalOpen);

//   const toggleSideBarDropdown = () => setIsSideBarOpen(!isSideBarOpen);

//   const toggleFabarDropdown = () => {
//     setIsFabarOpen(!isFabarOpen);
//     console.log(isSideBarOpen);
//   };

//   const toggleForBusinessDropdown = () => setForBusinessOpen(!forBusinessOpen);

//   const toggleCompanyDropdown = () => setCompanyOpen(!companyOpen);
//   const toggleIsPersonalDesktopDropdown = () =>
//     setIsPersonalDesktopOpen(!isPersonalDesktopOpen);
//   const toggleIsCompanyDesktopDropdown = () =>
//     setIsCompanyDesktopOpen(!isCompanyDesktopOpen);
//   const toggleIsForBusinessDesktopDropdown = () =>
//     setForBusinessDesktopOpen(!forBusinessDesktopOpen);
 
//   const [activeMenu, setActiveMenu] = useState("");

//   return (
//     <div className="general-size-wrap">
//       <div className="raven-website-navbar-container-wrap-cont-mobile">
//         <div className="img-box">
//           <figure>{heroIcons.ravenLogo}</figure>
//         </div>
//         <div
//           className={`fabar ${isFabarOpen ? "fatimes" : ""}`}
//           onClick={toggleFabarDropdown}
//         >
//           <div className={`side-bar ${isFabarOpen ? "open" : ""}`}>
//             <div className="img-box">
//               <figure>{heroIcons.ravenLogo}</figure>
//             </div>

//             <div className="inner-content-wrap">
//               <p>Personal</p>

//               <div
//                 onClick={togglePersonalDropdown}
//                 style={{ cursor: "pointer" }}
//               >
//                 {isPersonalOpen ? <FaChevronUp /> : <FaChevronDown />}
//               </div>
//               <div className={`personal ${isPersonalOpen ? "open" : ""}`}>
//                 <div className="personal-inner-container-holder">
//                   <p className="header">Savings</p>
//                   <p className="body">
//                     Digital Product for retailers and small business onwers
//                   </p>
//                 </div>
//                 <div className="personal-inner-container-holder">
//                   <p className="header">Virtual & Physical Cards</p>
//                   <p className="body">
//                     Corporate finance product for big businesses
//                   </p>
//                 </div>

//                 <div className="personal-inner-container-holder">
//                   <p className="header">Overdrafts — Loans</p>
//                   <p className="body">
//                     Banking for retailers and small business owners
//                   </p>
//                 </div>
//                 <div className="personal-inner-container-holder">
//                   <p className="header">Finalytics</p>
//                   <p className="body">Manage bulk payments for your business</p>
//                 </div>
//               </div>
//             </div>
//             <div className="inner-content-wrap">
//               <p>For Business</p>
//               <FaChevronUp />
//             </div>
//             <div className="inner-content-wrap">
//               <p>Company</p>
//               <FaChevronUp />
//             </div>
//             <div className="inner-content-wrap">
//               <p>FAQs</p>
//             </div>

//             <div className="raven-website-navbar-container-wrap-cont-mobile-footer">
//               <div className="navbar-footer-image-box-holder">
//                 <div className="img-box">
//                   <figure>{globalIcons.googlePlay}</figure>
//                 </div>
//                 <div className="img-box">
//                   <figure>{globalIcons.appleStore}</figure>
//                 </div>
//               </div>

//               <div className="navbar-iphone">
//                 <img src={iphone} alt="" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="raven-website-navbar-container-wrap-cont">
//         <div className="img-box">
//           <figure>{heroIcons.ravenLogo}</figure>
//         </div>

//         <div className="raven-website-navbar-sections">
//           <div className="raven-website-navbar-sections-div-personal">
//             <p onClick={toggleIsPersonalDesktopDropdown}>Personal</p>
//             <div className="img-box" onClick={toggleIsPersonalDesktopDropdown}>
//               <figure>{globalIcons.arrowDown}</figure>
//             </div>
            

//             {isPersonalDesktopOpen && (
//               <div className="personal-content-inner">
//                 <div className="for-business-contents-wrapper">
//                 {menuItems.personal.map((items, index) => (
//                     <div
//                       onMouseEnter={() => setActiveMenu(items.label)}
//                       key={index}
//                       onMouseLeave={() => setActiveMenu("")}
//                       className={`for-business-inner-box-container ${
//                         activeMenu === items.label ? "active" : ""
//                       }`}
//                     >
//                       <figure className="for-business-img-box-light">
//                         {activeMenu === items.label
//                           ? items.activeIcon
//                           : items.icon}
//                       </figure>

//                       <div className="business-content-inner-ptags">
//                         <div className="for-business-content-inner-ptag-and-arrow">
//                           <p className="business-inner-header">{items.label}</p>
//                           <div className="for-business-arrow-up">
//                             <figure>{navbarIcons.arowUp}</figure>
//                           </div>
//                         </div>
//                         <p className="business-container-body">
//                           {items.description}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
                 
//                 </div>
               

               
//               </div>
//             )}
//           </div>

//           <div className="raven-website-navbar-sections-div-for-business">
//             <p onClick={toggleIsForBusinessDesktopDropdown}>For Business</p>
//             <div
//               onClick={toggleIsForBusinessDesktopDropdown}
//               className="img-box"
//             >
//               <figure>{globalIcons.arrowDown}</figure>
//             </div>
//             {forBusinessDesktopOpen && (
//               <div className="for-business-content-inner">
//                 <div className="for-business-contents-wrapper">
//                   {menuItems.left.map((items, index) => (
//                     <div
//                       onMouseEnter={() => setActiveMenu(items.label)}
//                       key={index}
//                       onMouseLeave={() => setActiveMenu("")}
//                       className={`for-business-inner-box-container ${
//                         activeMenu === items.label ? "active" : ""
//                       }`}
//                     >
//                       <figure className="for-business-img-box-light">
//                         {activeMenu === items.label
//                           ? items.activeIcon
//                           : items.icon}
//                       </figure>

//                       <div className="business-content-inner-ptags">
//                         <div className="for-business-content-inner-ptag-and-arrow">
//                           <p className="business-inner-header">{items.label}</p>
//                           <div className="for-business-arrow-up">
//                             <figure>{navbarIcons.arowUp}</figure>
//                           </div>
//                         </div>
//                         <p className="business-container-body">
//                           {items.description}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
                 
//                 </div>
//                 <div className="for-business-contents-wrapper">
//                   {menuItems.right.map((items, index) => (
//                     <div
//                       onMouseEnter={() => setActiveMenu(items.label)}
//                       key={index}
//                       onMouseLeave={() => setActiveMenu("")}
//                       className={`for-business-inner-box-container ${
//                         activeMenu === items.label ? "active" : ""
//                       }`}
//                     >
//                       <figure className="for-business-img-box-light">
//                         {activeMenu === items.label
//                           ? items.activeIcon
//                           : items.icon}
//                       </figure>

//                       <div className="business-content-inner-ptags">
//                         <div className="for-business-content-inner-ptag-and-arrow">
//                           <p className="business-inner-header">{items.label}</p>
//                           <div className="for-business-arrow-up">
//                             <figure>{navbarIcons.arowUp}</figure>
//                           </div>
//                         </div>
//                         <p className="business-container-body">
//                           {items.description}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

               
//               </div>
//             )}
//           </div>

//           <div className="raven-website-navbar-sections-div-company">
//             <p onClick={toggleIsCompanyDesktopDropdown}>Company</p>
//             <div onClick={toggleIsCompanyDesktopDropdown} className="img-box">
//               <figure>{globalIcons.arrowDown}</figure>
//             </div>
//             {isCompanyDesktopOpen && (
//               <div className="company-content-inner">
//                 <div className="company-inner-box-container">
//                   <div className="company-img-box-filled">
//                     <figure>{navbarIcons.ravenWingFilled}</figure>
//                   </div>
//                   <div className="company-img-box-light">
//                     <figure>{navbarIcons.ravenWingLight}</figure>
//                   </div>
//                   <div className="company-content-inner-ptags">
//                     <div className="company-content-inner-ptag-and-arrow">
//                       <p className="company-inner-header">About Us</p>
//                       <div className="-company-arrow-up">
//                         <figure>{navbarIcons.arowUp}</figure>
//                       </div>
//                     </div>
//                     <p className="company-inner-body">About Us at Raven Bank</p>
//                   </div>
//                 </div>

//                 <div className="company-inner-box-container">
//                   <div className="company-img-box-filled">
//                     <figure>{navbarIcons.careersFilled}</figure>
//                   </div>
//                   <div className="company-img-box-light">
//                     <figure>{navbarIcons.careersLight}</figure>
//                   </div>
//                   <div className="company-content-inner-ptags">
//                     <div className="company-content-inner-ptag-and-arrow">
//                       <p className="company-inner-header">Careers</p>
//                       <div className="-company-arrow-up">
//                         <figure>{navbarIcons.arowUp}</figure>
//                       </div>
//                     </div>
//                     <p className="company-inner-body">
//                       Join the Raven team to make Raven better
//                     </p>
//                   </div>
//                 </div>

//                 <div className="company-inner-box-container">
//                   <div className="company-img-box-filled">
//                     <figure>{navbarIcons.supportFilled}</figure>
//                   </div>
//                   <div className="company-img-box-light">
//                     <figure>{navbarIcons.supportLight}</figure>
//                   </div>
//                   <div className="company-content-inner-ptags">
//                     <div className="company-content-inner-ptag-and-arrow">
//                       <p className="company-inner-header">Support</p>
//                       <div className="-company-arrow-up">
//                         <figure>{navbarIcons.arowUp}</figure>
//                       </div>
//                     </div>
//                     <p className="company-inner-body">
//                       Get in touch with us. we are never far from you!
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>

//           <div className="raven-website-navbar-sections-div">
//             <p>FAQ</p>
//           </div>
//         </div>
//         <div className="raven-website-navbar-button-div">
//           <RavenButton
//             color="white-light"
//             label="Sign In"
//             textColor="deep-green-light"
//           />
//           <RavenButton color="green-light" label="Get Started" />
//         </div>
//       </div>
//     </div>
//   );
// };
// export default NavBar;
export{}