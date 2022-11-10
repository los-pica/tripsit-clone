import React from "react";

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
    <div>
      {links.map((link) => {
        return <a href={link.href}>{link.name}</a>;
      })}
    </div>
  );
};

export default Links;
