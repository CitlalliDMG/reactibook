import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";
import SignOutButton from "../SignOut";
import { AuthUserContext } from "../Session";
import logo from "../../assets/react-logo.svg";

const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-background">
    <AuthUserContext.Consumer>
      {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </nav>
);

const NavigationAuth = () => (
  <Fragment>
    <a className="navbar-brand" href={process.env.PUBLIC_URL + ROUTES.HOME}>
      <img alt="Reactibook Logo" src={logo} id="logo-navbar" />
      ReactiBook
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to={ROUTES.HOME} className="nav-link">
            Inicio
          </Link>
        </li>
        <li className="nav-item">
          <Link to={ROUTES.ACCOUNT} className="nav-link">
            Mi cuenta
          </Link>
        </li>
        <li className="nav-item">
          <Link to={ROUTES.USERS} className="nav-link">
            Usuarios
          </Link>
        </li>
        <li className="nav-item">
          <SignOutButton />
        </li>
      </ul>
    </div>
  </Fragment>
);

const NavigationNonAuth = () => (
  <Fragment>
    <a className="navbar-brand" href={process.env.PUBLIC_URL + ROUTES.SIGN_IN}>
      <img alt="Reactibook Logo" src={logo} id="logo-navbar" />
      ReactiBook
    </a>
  </Fragment>
);

export default Navigation;
