import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDdXrlRBkfqSHi4CXi5AVaNuRtVC-QpFac',
  authDomain: 'restaurant-menu-5a4f5.firebaseapp.com',
  databaseURL: 'https://restaurant-menu-5a4f5-default-rtdb.firebaseio.com',
  appId: '1:267132498643:web:0b63d688cd60b6547d1a26',
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;
