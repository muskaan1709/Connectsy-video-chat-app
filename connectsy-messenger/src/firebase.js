import firebase from "firebase";

const firebaseApp=firebase.initializeApp({

    apiKey: "AIzaSyD5pKZeFuUr_lZ7_CXxVwRhuQ1P59gVspE",
    authDomain: "facebook-messenger-clone-a47fa.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-a47fa.firebaseio.com",
    projectId: "facebook-messenger-clone-a47fa",
    storageBucket: "facebook-messenger-clone-a47fa.appspot.com",
    messagingSenderId: "118056282561",
    appId: "1:118056282561:web:14549021e2dc07c9f5e740",
    measurementId: "G-Y1BFYTQ74H"

});

const db=firebaseApp.firestore();

export default db;