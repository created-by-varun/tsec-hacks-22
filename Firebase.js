import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAXYyvgTzOxSEaF_4UVklVEJxyVEckfODw",
    authDomain: "tsec-hacks-2022.firebaseapp.com",
    projectId: "tsec-hacks-2022",
    storageBucket: "tsec-hacks-2022.appspot.com",
    messagingSenderId: "1098645676026",
    appId: "1:1098645676026:web:dd87a10b53a1056e3e4e43"
  };
firebase.initializeApp(firebaseConfig);

export default firebase;