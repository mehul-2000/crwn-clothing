import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
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


const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account',
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}
export const db = getFirestore();


export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
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
                ...additionalInfo,
            })
        } catch (e) {
            console.log('error creating user ', e)
        }
    }
    return userDocRef;
}


export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};