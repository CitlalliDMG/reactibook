import React from 'react';

import { withFirebase } from "../Firebase";

const SignOutButton = ({ firebase }) => (
  <button className="nav-button" type="button" onClick={firebase.doSignOut}>Cerrar sesión</button>
);

export default withFirebase(SignOutButton);