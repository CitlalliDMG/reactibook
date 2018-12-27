import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";

const PasswordForgetPage = () => (
  <main>
    <h1>Recupera tu contraseña</h1>
    <p>Llena este formulario para recibir en tu correo instrucciones para recuperarla</p>
    <PasswordForgetForm />
  </main>
);

const INITIAL_STATE = {
  email: "",
  error: null,
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }
  
  onSubmit = event => {
    event.preventDefault();
    const { email } = this.state;

    this.props.firebase.doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      })
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() { 
    const { email, error } = this.state;

    const isInvalid = email === "";

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
        <button disabled={isInvalid} type="submit">Recuperar</button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}
 
const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>¿Olvidaste tu contraseña?</Link>
  </p>
)
export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };