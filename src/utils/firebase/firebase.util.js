import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBPDkGDdboCVfr5t1WvBYMu6P90TLlslU0",
    authDomain: "crwn-clothing-db-d9bc8.firebaseapp.com",
    projectId: "crwn-clothing-db-d9bc8",
    storageBucket: "crwn-clothing-db-d9bc8.appspot.com",
    messagingSenderId: "681638686968",
    appId: "1:681638686968:web:bb219c07ca4471ceea8b0d"
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account',
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


export const db = getFirestore();


export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);


    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            })
        } catch (e) {
            console.log('error creating user ', e)
        }
    }
    return userDocRef;
}