# Reactibook

Project to build a web app that emulates the basic functioning of a social network, allowing the user to register, log in, publish and view the publications of others in its timeline

Try the demo [here](https://citlallidmg.github.io/reactibook/)

## Features

- Registration of a new user with email and password
- Login for registered users
- Password recovery
- Change of password
- Publication of new text entries
- Selector to choose with whom to share the publication
- View own entries and other users
- Elimination of own entries
- Data permanence

## Stack

- Create React App
- React Context API
- SweetAlert
- Bootstrap
- Firebase Authentication
- Firebase Realtime Database

## Hosting

- [gh-pages](https://github.com/gitname/react-gh-pages)

## Quick Start

Clone and run the repository

```shell
$ git clone https://github.com/CitlalliDMG/reactibook.git
$ cd reactibook
$ npm install
$ npm start
```

Also you will need to create your own project on Firebase to get your own project configuration.

```javascript
// src/config.js

const configuration = {
  apiKeyFirebase: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOU_MESSAGING_SENDER_ID"
};

export default configuration;
```

## Deploying to GitHub Pages

Configure this app with your project-specific details:

```json
// package.json

{
  "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME",
  // ....
  "scripts": {
    // ....
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

Build and deploy the app:

```shell
$ npm run deploy
```

## Author

- Developed by [Citlalli Del Moral](https://github.com/CitlalliDMG)
