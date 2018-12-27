import React from "react";

import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";

const AccountPage = () => (
  <main>
    <h1>Tu cuenta</h1>
    <PasswordForgetForm />
    <PasswordChangeForm />
  </main>
);

export default AccountPage;
