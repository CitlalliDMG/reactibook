import React from 'react';

import { withAuthorization } from "../Session";
import PostInput from "./PostInput";
import DisplayPost from "./DisplayPost";

const HomePage = () => (
  <main className="home row">
    <PostInput />
    <DisplayPost />
  </main>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);