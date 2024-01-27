import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ConditionalRendering from "./ConditionalRendering.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConditionalRendering />
  </React.StrictMode>
);
