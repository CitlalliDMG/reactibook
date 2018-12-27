import React from 'react';

import { withAuthorization } from "../Session";

const HomePage = () => (
  <div>
    <h1>Tu muro</h1>
    <p>Solo puedes ver esto si estas logueado</p>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);