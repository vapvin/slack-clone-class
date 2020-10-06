import firebase from "firebase";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDl3NPdtxqkyVx5meXLyYFRtq0-kEQr07E",
  authDomain: "slack-85505.firebaseapp.com",
  databaseURL: "https://slack-85505.firebaseio.com",
  projectId: "slack-85505",
  storageBucket: "slack-85505.appspot.com",
  messagingSenderId: "1058649161458",
  appId: "1:1058649161458:web:c36c1e4734a3f8e3a9da6b",
  measurementId: "G-TL91LNKKN8",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
