import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const links = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
  {
    name: "Combinations",
    href: "/combinations",
  },
  {
    name: "Factsheets",
    href: "/factsheets",
  },
  {
    name: "Donate",
    href: "/donate",
  },
];

const Links = () => {
  return (
    <>
      {links.map((link) => {
        return <Link to={link.href}>{link.name}</Link>;
      })}
    </>
  );
};

export default Links;
