import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router";

import "./index.css";
import App from "./App";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find the root element");
}

const root = createRoot(rootElement);

const RootApp = () => {
  return (
    <React.StrictMode>
      <Router>
        <App/>
      </Router>
    </React.StrictMode> 
  )
}

root.render(<RootApp />);
