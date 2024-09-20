import React, { useState, useEffect } from "react";
import { debounce } from "./debounce";
// import { debounce } from "./debounce";

interface Props { 
  children: React.ReactNode;
  reverseEffect?(): void;
}

const NavbarFade = ({ children, reverseEffect }: Props) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const handleScroll = debounce(() => {
    const currentScrollPos = window.scrollY;

    const isVisible =
      (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) ||
      currentScrollPos < 10;

    setVisible(isVisible);
    setPrevScrollPos(currentScrollPos);

    if (!isVisible) {
      reverseEffect?.();
    }
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const navbarStyles = {
    position: "fixed",
    width: "100%",
    transition: "top 0.4s",
    display: "flex",
    alignItems: "center",
  };

  return (
    <div
      className="navbar-fade-wrap"
      style={{
        ...(navbarStyles as any),
        top: visible ? "0" : "-10rem",
        zIndex: 999,
      }}
    >
      {children}
    </div>
  );
};
export default NavbarFade;
