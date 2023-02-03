import React from "react";
import Footer from "./Footer";
import "./combinations.scss";
import SubstanceCombination from "../substance/SubstanceCombination";

const Combinations = () => {
  return (
    <div className="combinations">
      <SubstanceCombination />
      <Footer />
    </div>
  );
};

export default Combinations;
