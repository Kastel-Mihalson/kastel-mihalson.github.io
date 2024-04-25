import React from 'react';
import { createRoot } from "react-dom/client";
import App from "./components/app/app";
import './index.css';
import { HashRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
      <HashRouter>
          <App />
      </HashRouter>
  </React.StrictMode>
);
