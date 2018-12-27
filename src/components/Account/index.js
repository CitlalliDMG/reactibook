import React from "react";

import { AuthUserContext, withAuthorization } from "../Session";
import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <main>
        <h1>Tu cuenta:</h1>
        <p>Nombre: {authUser.displayName}</p>
        <p>Email: {authUser.email} </p>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </main>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);
