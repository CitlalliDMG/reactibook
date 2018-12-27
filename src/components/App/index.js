import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "../Navigation";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import HomePage from "../Home";
import AccountPage from "../Account";
import UsersPage from "../Users";
import Page404 from "../Page404";

import * as ROUTES from "../../constants/routes";
import { withAuthentication } from "../Session";

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Fragment> 

      <Navigation />

      <Switch>
        <Route exact path = {ROUTES.SIGN_IN} component= {SignInPage} />
        <Route exact path = {ROUTES.SIGN_UP} component= {SignUpPage} />
        <Route exact path = {ROUTES.PASSWORD_FORGET} component= {PasswordForgetPage} />
        <Route exact path = {ROUTES.HOME} component= {HomePage} />
        <Route exact path = {ROUTES.ACCOUNT} component= {AccountPage} />
        <Route exact path = {ROUTES.USERS} component= {UsersPage} />
        <Route component={Page404} />
      </Switch>

    </Fragment>
  </Router>
);

export default withAuthentication(App);
