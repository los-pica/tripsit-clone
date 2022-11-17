import React, { useState } from "react";
import SubstanceButton from "./SubstanceButton";

const SubstanceCombination = () => {
  const [substance, setSubstance] = useState([
    { id: 1, name: "Cannabis", active: false, combinations: "" },
    { id: 2, name: "LSD", active: false, combinations: "" },
    { id: 3, name: "Cocaine", active: false, combinations: "" },
  ]);
  const onSubstanceClick = (id) => {
    const substanceCopy = [...substance];
    const actualSubstance = substanceCopy.find(
      (substance) => substance.id === id
    );
    actualSubstance.active = !actualSubstance.active;
    setSubstance(substanceCopy);
    console.log(id, substance);
  };
  return (
    <div>
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
