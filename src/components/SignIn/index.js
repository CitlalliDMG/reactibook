import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

import { SignUpLink } from "../SignUp";
import { PasswordForgetLink } from "../PasswordForget";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";

const SignInPage = () => (
  <main className="center container col-12 col-md-8">
    <h1>Inicia sesión</h1>
    <SignInForm />
    <PasswordForgetLink />
    <SignUpLink />
  </main>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};

class SignInFormBase extends Component {
  constructor(props){
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    event.preventDefault();

    const { email, password } = this.state;

    this.props.firebase.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      })
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() { 
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="email"
          placeholder="Ingresa tu correo electrónico"
          aria-label="Correo electrónico"
        />
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Ingresa tu contraseña"
          aria-label="Contraseña"
        />
        <button disabled={isInvalid} type="submit">Entrar</button>
        {error && <p className="error">{error.message}</p>}
      </form>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);
 
export default SignInPage;

export { SignInForm };
