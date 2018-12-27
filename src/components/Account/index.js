import React from "react";

import { AuthUserContext, withAuthorization } from "../Session";
import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <main className="center container col-12 col-md-8">
        <h1>Tu cuenta:</h1>
        <p>Username: {authUser.displayName} </p>
        <p>Email: {authUser.email} </p>
        <p> Recupera tu contraseña:</p>
        <PasswordForgetForm />
        <p>O cambia tu contraseña:</p>
        <PasswordChangeForm />
      </main>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);
