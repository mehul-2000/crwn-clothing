import { useEffect, useState } from 'react';
import { getRedirectResult } from 'firebase/auth'

import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth } from '../../utils/firebase/firebase.util';
import SignUpForm from '../../components/SignUp/signupform.component'

function SignIn() {



    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(response.user)

    }


    return (
        <div>
            <h1>SignIn</h1>
            <button onClick={logGoogleUser}>Sign In With Google Popup</button>
            <SignUpForm />
        </div>
    )
}

export default SignIn