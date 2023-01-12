import React, { useState } from "react";
import SubstanceButton from "./SubstanceButton";
import "./substanceCombination.scss";

const SubstanceCombination = () => {
  const [substance, setSubstance] = useState([
    { id: 1, name: "Cannabis", active: false, combinations: "" },
    { id: 2, name: "LSD", active: false, combinations: "" },
    { id: 3, name: "Cocaine", active: false, combinations: "" },
    { id: 4, name: "MDMA", active: false, combinations: "" },
    { id: 5, name: "Amphetamines", active: false, combinations: "" },
    { id: 6, name: "Ketamine", active: false, combinations: "" },
    { id: 7, name: "NBOme", active: false, combinations: "" },
    { id: 8, name: "Mushrooms", active: false, combinations: "" },
    { id: 9, name: "Mescaline", active: false, combinations: "" },
    { id: 10, name: "DMT", active: false, combinations: "" },
    { id: 11, name: "2C-B", active: false, combinations: "" },
    { id: 12, name: "Benzodiazepines", active: false, combinations: "" },
    { id: 13, name: "Cafeine", active: false, combinations: "" },
    { id: 14, name: "GHB", active: false, combinations: "" },
    { id: 15, name: "Opioids", active: false, combinations: "" },
  ]);
  const onSubstanceClick = (id) => {
    const substanceCopy = [...substance];
    const actualSubstance = substanceCopy.find(
      (substance) => substance.id === id
    );
    actualSubstance.active = !actualSubstance.active;
    setSubstance(substanceCopy);
  };
  return (
    <div className="substance-container">
      <h3>Choose the substances:</h3>
      <div className="substance-list">
        {substance.map((substance) => (
          <SubstanceButton
            key={substance.id}
            substance={substance}
            onClick={onSubstanceClick}
          />
        ))}
      </div>
    </div>
  );
};

export default SubstanceCombination;
