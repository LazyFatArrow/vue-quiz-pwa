import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';

firebase.initializeApp({
  apiKey: "paste your own",
  authDomain: "paste your own",
  databaseURL: "paste your own",
  projectId: "paste your own",
  storageBucket: "paste your own",
  messagingSenderId: "paste your own"
});

export default firebase;

