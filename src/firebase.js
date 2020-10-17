import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCPo0YRMbk7q6id9RBSgc1M-_-AWiS1Qec",
  authDomain: "clone-irad-682e5.firebaseapp.com",
  databaseURL: "https://clone-irad-682e5.firebaseio.com",
  projectId: "clone-irad-682e5",
  storageBucket: "clone-irad-682e5.appspot.com",
  messagingSenderId: "472093208202",
  appId: "1:472093208202:web:56edc1920cb55bee2fc773",
  measurementId: "G-EJK4KE9ZLG",
});

const auth = firebase.auth();

export { auth };
