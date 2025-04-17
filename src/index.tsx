import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router";
import { store } from "./app/store";
import { Provider } from "react-redux";

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
        <Provider store={store}>
        <App/>
        </Provider>
      </Router>
    </React.StrictMode> 
  )
}

root.render(<RootApp />);
