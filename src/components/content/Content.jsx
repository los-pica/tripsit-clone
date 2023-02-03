import React from "react";
import Contact from "../contact/Contact";
import Donate from "../donate/Donate";
import Combination from "../combinations/Combinations";
import About from "../about/About";
import { Route, Routes } from "react-router-dom";
import "./content.scss";

const Content = () => {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/combinations" element={<Combination />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default Content;
