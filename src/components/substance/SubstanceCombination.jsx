import React from "react";
import SubstanceButton from "./SubstanceButton";

const substances = [
  { id: 1, name: "Cannabis", combinations: "" },
  { id: 2, name: "LSD", combinations: "" },
  { id: 3, name: "Cocaine", combinations: "" },
];
function SubstanceCombination() {
  return (
    <div>
      <h3>Choose the substances:</h3>
      <div className="substance-list">
        {substances.map((substance) => (
          <SubstanceButton key={substance.id} name={substance.name} />
        ))}
      </div>
    </div>
  );
}

export default SubstanceCombination;
