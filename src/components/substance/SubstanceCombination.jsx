import React, { useState } from "react";
import SubstanceButton from "./SubstanceButton";
import "./substance-combination.scss";
import { substanceList } from "../../assets/SubstanceList";

const SubstanceCombination = () => {
  const [substances, setSubstances] = useState(substanceList);

  const onSubstanceClick = (id) => {
    //console.log(id);
    const substancesCopy = [...substances];
    const actualSubstance = substancesCopy.find(
      (substance) => substance.id === id
    );
    actualSubstance.active = !actualSubstance.active;
    setSubstances(substancesCopy);
    let active = substances.filter((a) => a.active).map((obj) => obj.id); // sub arrays unicas
    // hacer tpdas las combinaciones posibles, ordenar casda array crecientemente, eliminar repetidas
    let activePairs = active.reduce(
      (acc, v, i) => acc.concat(active.slice(i + 1).map((w) => [v, w])),
      []
    );

    for (let i = 0; i < activePairs.length; i++) {
      let thisPair = activePairs[i];
      let subst1Id = thisPair[0];
      let subst1 = substances.find((subst) => subst.id === subst1Id);
      let subst2Id = thisPair[1];
      let subst2 = substances.find((subst) => subst.id === subst2Id);

      console.log(
        `${subst1.name} + ${subst2.name} This combination is: ${subst1.combinations[subst2Id]}`
      );
    }
  };
  return (
    <div className="substance-container">
      <h3>Choose the substances:</h3>
      <div className="substance-list">
        {substances.map((substance) => (
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
