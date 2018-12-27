import React, { Component } from "react";
import { withFirebase } from "../Firebase";

// import { firebase } from "../firebase";

// import './PostInput.css'

class PostInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPost: "",
      username: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const postRef = this.props.firebase.posts();
    const post = {
      postText: this.state.currentPost,
      // user: this.props.user.displayName || this.props.user.email
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
          <button disabled={isInvalid}>Publicar</button>
        </form>
      </section>
    );
  }
}

export default withFirebase(PostInput);
