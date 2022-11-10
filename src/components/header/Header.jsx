import React from "react";
import Logo from "./Logo";
import Links from "./Links";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <div className="header-logo">
        <Logo />
      </div>
      <div className="header-links">
        <Links />
      </div>
    </header>
  );
};

export default Header;
