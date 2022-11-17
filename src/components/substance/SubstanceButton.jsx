import React from "react";
import "./substanceButton.scss";

function SubstanceButton({ substance, onClick }) {
  return (
    <button
      onClick={() => onClick(substance.id)}
      style={{ opacity: substance.active ? 1.0 : 0.5 }}
    >
      {substance.name}
    </button>
  );
}

export default SubstanceButton;
