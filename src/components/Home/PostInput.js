import React, { Component } from "react";
import { withFirebase } from "../Firebase";

class PostInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPost: "",
      username: "",
      user: {},
      shareOption: 'Selecciona'
    };
  }

  componentDidMount() {
    const user = this.props.firebase.auth.currentUser;
    this.setState({ user: user });
  }

  componentWillUnmount() {
    this.setState({ user: {} });
  }

  handleSubmit = event => {
    event.preventDefault();
    const postRef = this.props.firebase.posts();
    const post = {
      postText: this.state.currentPost,
      user: this.state.user.displayName || this.state.user.email,
      shareWith: this.state.shareOption
    };
    postRef.push(post);
    this.setState({
      currentPost: "",
      username: "",
      shareOption: 'Selecciona'
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const isInvalid = this.state.currentPost.trim() === "" || this.state.shareOption === "Selecciona";

    return (
      <section className="col-10 offset-1 col-md-4 offset-md-1 post-entry">
        <form onSubmit={this.handleSubmit}>
          <h3 className="mt-3 mt-md-0 ">¿Qué está pasando?</h3>
          <textarea
            type="text"
            name="currentPost"
            placeholder="Escribelo aquí"
            onChange={this.handleChange}
            value={this.state.currentPost}
          />
          <div className="row-post mb-3 mb-md-0">
            <select className="select-post" name="shareOption" value={this.state.shareOption} onChange={this.handleChange}>
              <option value="Selecciona">Compartir con...</option>
              <option value="Público">Público</option>
              <option value="Amigos">Amigos</option>
            </select>
            <button className="home-button" disabled={isInvalid} type="submit">
              Publicar
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default withFirebase(PostInput);
