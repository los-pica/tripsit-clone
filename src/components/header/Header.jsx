import React from "react";
import Logo from "./Logo";
import Links from "./Links";
import "./header.scss";

const Header = () => {
  const toggleMenu = () => {
    const links = document.getElementsByClassName("header-links")[0];
    const isOpen = links.classList.contains("open-menu");
    if (isOpen) {
      links.classList.remove("open-menu");
    } else {
      links.classList.add("open-menu");
    }
  };

  return (
    <header>
      <div className="container">
        <div className="header">
          <Logo />
          <div onClick={toggleMenu} className="header-toggle">
            <button>
              <div></div>
              <div></div>
              <div></div>
            </button>
          </div>
          <div className="header-links">
            <Links />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
