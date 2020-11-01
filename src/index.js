import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/main.css";
import "typeface-dr-sugiyama";
import "typeface-dancing-script";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { LanguageProvider } from "./components/Multilanguage/LanguageProvider";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
