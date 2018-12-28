import React from "react";

import { AuthUserContext, withAuthorization } from "../Session";
import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <main className="center container col-12 col-md-8">
        <h1 className="mt">Tu cuenta:</h1>
        <section className="account-container">
          <p>
            <span className="bolder">Usuario:</span> {authUser.displayName}{" "}
          </p>
          <p className="info">
            <span className="bolder">Correo:</span> {authUser.email}{" "}
          </p>
        </section>
        <p className="bolder"> Recupera tu contraseña:</p>
        <PasswordForgetForm />
        <p className="bolder">O cambia tu contraseña:</p>
        <PasswordChangeForm />
      </main>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);
