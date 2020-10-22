import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyDcN9S6_ArzreqRIMByHmfeAC5KdyYjyX0',
  authDomain: 'crwn-db-d4110.firebaseapp.com',
  databaseURL: 'https://crwn-db-d4110.firebaseio.com',
  projectId: 'crwn-db-d4110',
  storageBucket: 'crwn-db-d4110.appspot.com',
  messagingSenderId: '229374618418',
  appId: '1:229374618418:web:0b77620c501c7f8eefc52b',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
  login_hint: 'user@example.com',
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (user, additonalData) => {
  if (!user) return 'no user';

  const userRef = firestore.doc(`users/${user.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = user;
    const created_at = new Date();

    try {
      userRef.set({
        displayName,
        email,
        created_at,
        ...additonalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export default firebase;
