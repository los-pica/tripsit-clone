//  import { useState } from "react";
import Header from "../header/Header";
//import Content from "../content/Content";
//import Footer from "../footer/Footer";
import Contact from "../contact/Contact";
import "./app.scss";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/*<div className="app">
        <Content />
        <Footer />
  </div> */}
    </>
  );
};

export default App;
