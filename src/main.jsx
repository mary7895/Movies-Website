import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import "./index.css";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store/store";

const root = createRoot(document.getElementById("root"));
const RootComponent = () => {
  const language = useSelector((state) => state.language);

  return (
    <Router>
      <div dir={language.language === "en" ? "ltr" : "rtl"}>
        <App />
      </div>
    </Router>
  );
};

root.render(
  <Provider store={store}>
    <RootComponent />
  </Provider>
);

