import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import App from "../../App";
import Login from "../../routes/Auth/Login/Login";
import Signup from "../../routes/Auth/Signup/Signup";

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/login" component={Login} />
      <Route path="/sign-up" component={Signup} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
