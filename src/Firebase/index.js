import firebase from "firebase"
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAkCWetIT_Qxexi9ni0VtcVHP2jTAlFOgo",
    authDomain: "fb-ui-clone.firebaseapp.com",
    projectId: "fb-ui-clone",
    storageBucket: "fb-ui-clone.appspot.com",
    messagingSenderId: "955928480046",
    appId: "1:955928480046:web:2576c090f6753f47a652bf",
    measurementId: "G-MC8KVE2BZJ"
})
const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export default db;