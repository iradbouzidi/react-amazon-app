import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCSXKYUitCpoyvj4J6ZLr47V_EslOCELwU",
  authDomain: "clone-irad.firebaseapp.com",
  databaseURL: "https://clone-irad.firebaseio.com",
  projectId: "clone-irad",
  storageBucket: "clone-irad.appspot.com",
  messagingSenderId: "889361366197",
  appId: "1:889361366197:web:676dd6d55bfcd553e192fc",
  measurementId: "G-N996F4C10Y",
});

const auth = firebase.auth();

export { auth };
