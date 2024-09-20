import React, { useState } from "react";
import "../../styles/layout/NavbarTestBox.css";
import { navbarIcons } from "../../assets/layoutAssets/navbarIcons";
import { useOnClickOutside } from "../../helper/UseOnClickOutside";

const downIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="16"
    fill="none"
    viewBox="0 0 17 16"
    className="img"
  >
    <path
      stroke="#0B8376"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M4.5 6l4 4 4-4"
    ></path>
  </svg>
);

const NavbarTestBox = () => {
  const [showDrop, setShowDrop] = useState("");

  const linkList = [
    {
      name: "Personal",
      icon: true,
      onAction: () => {},
      options: [
        {
          title: "Savings",
          text: "Digital Product for retailers and small business onwers",
          icon: navbarIcons.piggyFilled,
          color: "rgba(11, 131, 118, 1)",
        },
        {
          title: "Savings",
          text: "Digital Product for retailers and small business onwers",
          icon: navbarIcons.piggyFilled,
          color: "rgba(11, 131, 118, 1)",
        },
        {
          title: "Savings",
          text: "Digital Product for retailers and small business onwers",
          icon: navbarIcons.piggyFilled,
          color: "rgba(11, 131, 118, 1)",
        },
      ],
    },
    {
      name: "For Business",
      icon: true,
      onAction: () => {},
      bigOption: true,
      options: [
        {
          title: "Business",
          text: "Digital Product for retailers and small business onwers",
          icon: navbarIcons.piggyFilled,
          color: "rgba(11, 131, 118, 1)",
        },
        {
          title: "Savings",
          text: "Digital Product for retailers and small business onwers",
          icon: navbarIcons.piggyFilled,
          color: "rgba(11, 131, 118, 1)",
        },
        {
          title: "Savings",
          text: "Digital Product for retailers and small business onwers",
          icon: navbarIcons.piggyFilled,
          color: "rgba(11, 131, 118, 1)",
        },
        {
          title: "Business",
          text: "Digital Product for retailers and small business onwers",
          icon: navbarIcons.piggyFilled,
          color: "rgba(11, 131, 118, 1)",
        },
        {
          title: "Savings",
          text: "Digital Product for retailers and small business onwers",
          icon: navbarIcons.piggyFilled,
          color: "rgba(11, 131, 118, 1)",
        },
        {
          title: "Savings",
          text: "Digital Product for retailers and small business onwers",
          icon: navbarIcons.piggyFilled,
          color: "rgba(11, 131, 118, 1)",
        },
      ],
    },
    {
      name: "Comapany",
      icon: true,
      onAction: () => {},
      options: [
        {
          title: "Company",
          text: "Digital Product for retailers and small business onwers",
          icon: navbarIcons.piggyFilled,
          color: "rgba(11, 131, 118, 1)",
        },
        {
          title: "Savings",
          text: "Digital Product for retailers and small business onwers",
          icon: navbarIcons.piggyFilled,
          color: "rgba(11, 131, 118, 1)",
        },
        {
          title: "Savings",
          text: "Digital Product for retailers and small business onwers",
          icon: navbarIcons.piggyFilled,
          color: "rgba(11, 131, 118, 1)",
        },
      ],
    },
    { name: "FAQ", icon: false, onAction: () => {} },
  ];

  const testRef = useOnClickOutside(() => {
    showDrop && setShowDrop("");
  });

  return (
    <div className="navbar-component-index-wrapper">
      {/* logo herer start */}
      <div className="logo-box"></div>
      {/* logo herer end */}
      {/* links start here  */}
      <div ref={testRef} className="link-box">
        {/* list start */}
        {linkList?.map((chi, idx) => {
          const { icon, name, onAction, options, bigOption } = chi;
          return (
            <div
              onClick={() => {
                name === showDrop ? setShowDrop("") : setShowDrop(name);
              }}
              key={idx}
              className="link-item"
            >
              <p className="name">{name}</p>
              {icon && (
                <>
                  <figure className="img-box">{downIcon}</figure>
                </>
              )}
              <div
                className={`drop-box-wrapper ${
                  bigOption && "drop-box-wrapper-big"
                }  ${name === showDrop && "drop-box-wrapper-anime"}`}
              >
                <div className="top-wrap">
                  {" "}
                  {options?.map((child, i) => {
                    const { color, icon, text, title } = child;
                    return (
                      <div key={i} className="drop-box">
                        {/* icon box start */}
                        <div
                          style={{ backgroundColor: color }}
                          className="icon-box"
                        ></div>
                        {/* icon box end */}
                        <div className="title-text-box">
                          <p className="title">{title}</p>
                          <p className="text">{text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {bigOption && (
                  <>
                    <div className="blog-learn-box">
                        <p className="text">Learn more about Raven Bank and Financial Management.</p>
                        <p className="link"></p>
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
        {/* list end */}
      </div>
      {/* links start end */}
      {/* action box start  */}
      <div className="action-box"></div>
      {/* action box end */}
    </div>
  );
};

export default NavbarTestBox;
