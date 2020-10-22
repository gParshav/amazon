import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC-E-3iT3qP5-hUdkBYM58dl_gpydlXo7Q",
    authDomain: "clone-6ad8c.firebaseapp.com",
    databaseURL: "https://clone-6ad8c.firebaseio.com",
    projectId: "clone-6ad8c",
    storageBucket: "clone-6ad8c.appspot.com",
    messagingSenderId: "395794998098",
    appId: "1:395794998098:web:62dc27b720668132d8508b",
    measurementId: "G-XCQ4HLKTRF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth()

  export {db, auth};
  