import React from "react";
import "./header.scss";

const Header = ({ count, increment, decrement }) => {
  return (
    <header>
      <p className="count">{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </header>
  );
};

export default Header;
