import React, { Component } from "react";
import { withFirebase } from "../Firebase";

// import { firebase } from "../firebase";

// import './DisplayPost.css'

class DisplayPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    const postRef = this.props.firebase.posts();
    postRef.on("value", snapshot => {
      let listPosts = snapshot.val();
      let newState = [];
      for (let post in listPosts) {
        newState.push({
          id: post,
          postText: listPosts[post].postText,
          user: listPosts[post].user
        });
      }
      this.setState({
        posts: newState
      });
    });
  }

  removePost(postId) {
    const postRef = this.props.firebase.post(postId);
    postRef.remove();
  }

  editePost(postId) {
    console.log('Voy a editar el post con el ID: ' + postId);
  }

  render() {
    return (
      <section className="col-8 offset-2 col-md-6 offset-md-0">
        <div className="display-posts">
          <ul>
            {this.state.posts
              .map(post => {
                return (
                  <li key={post.id}>
                    <p className="text-color">{post.user}</p>
                    <p className="bolder">{post.postText}</p>
                    <hr/>
                    {/* {post.user === (this.props.user.displayName ||
                    this.props.user.email) ? ( */}
                      <div className="row">
                        <button className="button-post" onClick={() => this.editePost(post.id)}>
                          Editar
                        </button>
                        <button className="button-post" onClick={() => this.removePost(post.id)}>
                          Eliminar
                        </button>
                      </div>
                    {/* ) : null } */}
                  </li>
                );
              })
              .reverse()}
          </ul>
        </div>
      </section>
    );
  }
}

export default withFirebase(DisplayPost);
