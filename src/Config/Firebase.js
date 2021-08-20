import firebase from "firebase"
var firebaseConfig = {
  apiKey: "AIzaSyDIo1CWna4-XH1NfYEC2Spr-d7HFyLMd4U",
  authDomain: "todo-67692.firebaseapp.com",
  projectId: "todo-67692",
  storageBucket: "todo-67692.appspot.com",
  messagingSenderId: "190281530322",
  appId: "1:190281530322:web:0c20f473221ae47c08260b",
  measurementId: "G-CHYCNYC367"
};
<script src="https://www.gstatic.com/firebasejs/5.0.4/firebase.js"></script>

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export const db = firebase.firestore();

//   export const storage = firebase.storage();
  export const auth = firebase.auth();
  export const Firebase=firebase;
  export const storage = firebase.storage();