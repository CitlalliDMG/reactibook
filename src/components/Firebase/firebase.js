  import configuration from "../../config";
  import app from "firebase/app";
  import "firebase/auth";
  import "firebase/database";

  // Initialize Firebase
  const config = {
    apiKey: configuration.apiKeyFirebase,
    authDomain: configuration.authDomain,
    databaseURL: configuration.databaseURL,
    projectId: configuration.projectId,
    storageBucket: configuration.storageBucket,
    messagingSenderId: configuration.messagingSenderId
  };

  class Firebase {
    constructor(){
      app.initializeApp(config);

      this.auth = app.auth();
      this.db = app.database();
    }

    // AUTH FUNCTIONS

    doCreateUserWithEmailAndPassword = (email, password) => 
      this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);
    
    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

    // USER FUNCTIONS

    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref("users");

    // POST FUNCTIONS

    posts = () => this.db.ref("posts");

    post = postId => this.db.ref(`/posts/${postId}`);
    
   }

export default Firebase;