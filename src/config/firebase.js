import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCccUSQ-qxDzN9OsjpPol3vZQ6OdBLbX3w",
  authDomain: "react-file-manager-d9234.firebaseapp.com",
  projectId: "react-file-manager-d9234",
  storageBucket: "react-file-manager-d9234.appspot.com",
  messagingSenderId: "633230081",
  appId: "1:633230081:web:be0e9f29460754b5b7c100",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
