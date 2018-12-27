import React, { Component, Fragment } from 'react';

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
      <main className="center container col-12 col-md-8">
        <h1>Usuarios de Reactibook</h1>
        {loading && <div>Cargando ...</div>}

        <UserList users={users} />
      </main>
    );
  }
}

const UserList = ({ users }) => (
  <Fragment>
    {users.map(user => (
      <div className="card" key={user.uid}>
        <div className="card-body">
          <h5 className="card-title"><strong>Usuario:</strong> {user.username}</h5>
          <p className="card-text"><strong>ID:</strong> {user.uid}</p>
          <p className="card-text"><strong>Email:</strong> {user.email}</p>
        </div>
      </div>
    ))}
  </Fragment>
)

const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(withFirebase(UsersPage));