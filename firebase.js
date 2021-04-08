import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCAkI0YR-E9iDA4aqtiM4gUImGVVDX0GLM",
    authDomain: "sid-whatsapp-4d03c.firebaseapp.com",
    projectId: "sid-whatsapp-4d03c",
    storageBucket: "sid-whatsapp-4d03c.appspot.com",
    messagingSenderId: "948371110753",
    appId: "1:948371110753:web:cea4a6db06acc845756320",
    measurementId: "G-MXLPX26TVK"
  };

  const app = !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};