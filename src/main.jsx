import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import MasterLayout from "./master";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MasterLayout />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
