import Header from "../header/Header";
import Content from "../content/Content";
import Contact from "../contact/Contact";
import Combinations from "../combinations/Combinations";
import { Route, Routes } from "react-router-dom";
import "./app.scss";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {
        <div className="app">
          <Content />
          <Combinations />
        </div>
      }
    </>
  );
};

export default App;
