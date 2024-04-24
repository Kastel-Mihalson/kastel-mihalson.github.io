import React from 'react';
import { createRoot } from "react-dom/client";
import App from "./components/app/app";
import './index.css';
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </React.StrictMode>
);