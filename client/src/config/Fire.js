import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyA8DV4jM4aDph6dsAVraOyv5M3_P1agu8k",
    authDomain: "suhbah-dff40.firebaseapp.com",
    databaseURL: "https://suhbah-dff40.firebaseio.com",
    projectId: "suhbah-dff40",
    storageBucket: "suhbah-dff40.appspot.com",
    messagingSenderId: "240189936037",
    appId: "1:240189936037:web:a1251523d00c403cb6584c"
};

const fire = firebase.initializeApp(config);
export default fire; 