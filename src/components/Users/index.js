import React, { Component } from 'react';

import { withFirebase } from "../Firebase";
import { withAuthorization } from "../Session";

class UsersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      users: [],
    }
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.users().on("value", snapshot => {
      const usersObject = snapshot.val();

      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key,
      }));

      this.setState({
        users: usersList,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() { 
    const { users, loading } = this.state;
    return (
      <main>
        <h1>Usuarios de Reactibook</h1>
        {loading && <div>Cargando ...</div>}

        <UserList users={users} />
      </main>
    );
  }
}

const UserList = ({ users }) => (
  <ul>
    {users.map(user => (
      <li key={user.uid}>
        <span>
          <strong>ID:</strong> {user.uid}
        </span>
        <br/>
        <span>
          <strong>Email:</strong> {user.email}
        </span>
        <br/>
        <span>
          <strong>Username:</strong> {user.username}
        </span>
      </li>
    ))}
  </ul>
)

const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(withFirebase(UsersPage));