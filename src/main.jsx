import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ProviderContext from "./context/ProviderContext";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProviderContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProviderContext>
  </React.StrictMode>
);
