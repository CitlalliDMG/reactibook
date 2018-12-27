import React, { Component } from "react";
import { withFirebase } from "../Firebase";

class PostInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPost: "",
      username: "",
      user: {}
    };
  }

  componentDidMount(){
    const user = this.props.firebase.auth.currentUser
    this.setState({user: user});
  }

  componentWillUnmount(){
    this.setState({user: {}});
  }

  handleSubmit = event => {    
    event.preventDefault();
    const postRef = this.props.firebase.posts();
    const post = {
      postText: this.state.currentPost,
      user: this.state.user.displayName|| this.state.user.email
    };
    postRef.push(post);
    this.setState({
      currentPost: "",
      username: ""
    });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const isInvalid = this.state.currentPost.trim() === '';

    return (
      <section className="col-8 offset-2 col-md-4 offset-md-1 justify-content-around post-entry">
        <form onSubmit={this.handleSubmit}>
          <h3>¿Qué está pasando?</h3>
          <textarea
            type="text"
            name="currentPost"
            placeholder="Escribelo aquí"
            onChange={this.handleChange}
            value={this.state.currentPost}
          />
          <button className="home-button" disabled={isInvalid} type="submit">Publicar</button>
        </form>
      </section>
    );
  }
}

export default withFirebase(PostInput);
