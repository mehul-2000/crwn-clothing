import React from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.util';
function SignIn() {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(response.user)

    }
    return (
        <div>
            <h1>SignIn</h1>
            <button onClick={logGoogleUser}>Sign In With Google Popup</button>
        </div>
    )
}

export default SignIn