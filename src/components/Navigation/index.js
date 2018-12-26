import React from 'react';
import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";
import SignOutButton from "../SignOut";

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link to= {ROUTES.SIGN_IN}>Sign In</Link>
      </li>
      <li>
        <Link to= {ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to= {ROUTES.ADMIN}>Admin</Link>
      </li>
      <li>
        <SignOutButton />
      </li>
    </ul>
  </nav>
);
 
export default Navigation;