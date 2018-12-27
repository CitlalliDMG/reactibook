import React, { Component } from 'react';

import { withFirebase } from '../Firebase';

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    event.preventDefault();

    const { passwordOne } = this.state;

    this.props.firebase.doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordTwo === '' || passwordOne !== passwordTwo;

    const passwordValidation =
      passwordOne !== passwordTwo;

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Ingresa tu contraseña"
          aria-label="Contraseña"
        />

        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirma tu contraseña"
          aria-label="Confirma contraseña"
        />

        {passwordValidation ? <p className="error">Las contraseñas no coindicen</p> : null}

        <button disabled={isInvalid} type="submit">
          Cambiar contraseña
        </button>

        {error && <p className="error">{error.message}</p>}
      </form>
    );
  }
}

export default withFirebase(PasswordChangeForm);