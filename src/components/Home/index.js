import React from 'react';

import { withAuthorization } from "../Session";
import PostInput from "./PostInput";
import DisplayPost from "./DisplayPost";

const HomePage = () => {
  return(
  <main className="home row">
    <PostInput />
    {/* TO DO: Resolve warning with session change */}
    <DisplayPost />
  </main>
  )
}


const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);