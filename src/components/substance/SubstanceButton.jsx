import React, { useState } from "react";
import "./substance.scss";
/*
const substances = [
  { id: 1, name: "Cannabis", combinations: "" },
  { id: 2, name: "LSD", combinations: "" },
  { id: 3, name: "Cocaine", combinations: "" },
];
*/
function SubstanceButton(props) {
  const [active, setActive] = useState(false);
  console.log(active);

  return (
    <button
      onClick={() => {
        setActive(!active);
      }}
      style={{ opacity: active ? 1.0 : 0.5 }}
    >
      {props.name}
    </button>
  );
}

export default SubstanceButton;
