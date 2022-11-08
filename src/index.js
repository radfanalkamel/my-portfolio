import React from "react";
import "./Styles/index.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Router>
    <StrictMode>
      <App />
    </StrictMode>
  </Router>
);
