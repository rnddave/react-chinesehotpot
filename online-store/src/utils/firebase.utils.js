// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzOTGTzE_hEoePXTzGQ3k57gHFemY6knU",
  authDomain: "chinese-hotpot-db.firebaseapp.com",
  projectId: "chinese-hotpot-db",
  storageBucket: "chinese-hotpot-db.appspot.com",
  messagingSenderId: "348620970148",
  appId: "1:348620970148:web:269b5b7b33a7b11b7c2e31",
  measurementId: "G-SFMJYZY7PW"
};

// --------- Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// --------- USER AUTHENTICATION
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// ---------- ANALYTICS *** NOT USED YET ***
//const analytics = getAnalytics(firebaseApp);

// ---------- DATABASE

export const db = getFirestore(); 

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc( db, 'user', userAuth.uid); // [our database] [the collection we want to access] [the collection item (in this case a user ID)]
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log (userSnapshot.exists());

    if(!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt
        });
      } catch (error) {
        console.log('There was an error creating user ', error.message);
      }
    }

    return userDocRef;


}
