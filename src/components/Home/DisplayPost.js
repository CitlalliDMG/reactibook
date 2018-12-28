import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import swal from 'sweetalert2';

class DisplayPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      user: {}
    };
  }

  getPosts = () => {
    const postRef = this.props.firebase.posts();
    postRef.on("value", snapshot => {
      let listPosts = snapshot.val();
      let newState = [];
      for (let post in listPosts) {
        newState.push({
          id: post,
          postText: listPosts[post].postText,
          user: listPosts[post].user,
          shareWith: listPosts[post].shareWith
        });
      }
      this.setState({
        posts: newState
      });
    });
  };

  componentDidMount() {
    this.setState({ user: this.props.firebase.auth.currentUser });
    this.getPosts();
  }

  componentWillUnmount() {
    this.setState({ user: {} });
  }

  removePost(postId) {
    swal({
      title: '¿Quieres borrar esta publicación?',
      text: "(Esta acción no se puede revertir)",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc3545',
      cancelButtonColor: '#20232a',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result)=> {
      if (result.value) {
        const postRef = this.props.firebase.post(postId);
        postRef.remove();
        swal({
          title: "¡Listo!",
          text: "La publicación ha sido borrada'",
          type: "success",
          confirmButtonColor: '#61dafb'
        })
      }
    })
  }

  editePost(postId) {
    console.log("Voy a editar el post con el ID: " + postId);
  }

  render() {
    return (
      <section className="col-10 offset-1 col-md-6 offset-md-0">
        <div className="display-posts">
          <ul>
            {this.state.posts
              .map(post => {
                return (
                  <li key={post.id}>
                    <p className="post-info"><span className="text-color">Publicado por:</span> {post.user}</p>
                    <p><span className="text-color">Compartido con:</span> {post.shareWith}</p>
                    <p className="bolder">{post.postText}</p>
                    <hr />
                    {post.user ===
                    (this.state.user.displayName || this.state.user.email) ? (
                      <div className="row">
                        <button
                          className="button-post"
                          onClick={() => this.editePost(post.id)}
                        >
                          Editar
                        </button>
                        <button
                          className="button-post"
                          onClick={() => this.removePost(post.id)}
                        >
                          Eliminar
                        </button>
                      </div>
                    ) : null}
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
