import React from "react";
import ReactDOM from "react-dom";
import Router from "./components/routes/Router";

import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById("root")
);
