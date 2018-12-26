  import configuration from "../../config";
  import app from "firebase/app";
  import "firebase/auth";

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
    }

    // AUTH FUNCTIONS

    doCreateUserWithEmailAndPassword = (email, password) => 
      this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);
    
    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
   }

export default Firebase;