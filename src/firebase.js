import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBcdYMF5Ftixoqb1D90IS3-JGPYIzaiP4U",
    authDomain: "streamers-2a3ae.firebaseapp.com",
    projectId: "streamers-2a3ae",
    storageBucket: "streamers-2a3ae.appspot.com",
    messagingSenderId: "314795112036",
    appId: "1:314795112036:web:ada4739de48ed676d45171",
    measurementId: "G-YPM78BSCQS"
  };

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export default storage;