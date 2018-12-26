  import configuration from "../../config";
  import app from "firebase/app";

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
    }
  }

export default Firebase;