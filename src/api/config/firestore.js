import firebase from 'firebase/app';

require('firebase/firestore');

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
});

const firestore = firebase.firestore();

firestore.settings({
  timestampsInSnapshots: true,
});

export default firestore;
