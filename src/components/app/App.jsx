import { useState } from "react";
import Header from "../header/Header";
import Content from "../content/Content";
import Footer from "../footer/Footer";
import "./app.scss";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => setCount(count - 1);

  return (
    <div className="app">
      <Header count={count} increment={increment} decrement={decrement} />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
