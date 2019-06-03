import firebase from 'firebase';
import apiKeys from './apiKeys';

const firebaseApp = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
};

export default firebaseApp;