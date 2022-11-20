import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./components/Nav";
import Generator from "./components/Generator";
import Footer from "./components/Footer";
import "./index.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <div className="main">
    <Nav />
    <Generator />
    <Footer />
  </div>
);
