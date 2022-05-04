import React, { useState, useContext } from 'react'
import Input from '../input/input.component'
import Button from '../button/button.component'
import './signinform.styles.scss'


import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.util';
function SignInForm() {
    const [formField, setFormField] = useState({
        email: '',
        password: '',

    })

    const { email, password } = formField;


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormField({ ...formField, [name]: value });
    }
    const resetFormField = () => {
        setFormField({
            email: '',
            password: '',
        })
    }
    const signInWithGoogle = async () => {
        const response = await signInWithGooglePopup();
        await createUserDocumentFromAuth(response.user)


    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const { user } = await signInAuthUserWithEmailAndPassword(
                email,
                password
            );

            resetFormField();

        } catch (err) {
            switch (err.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                default:
                    console.log(err);
            }
        }
        resetFormField();
    }
    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <Input
                    label='Email'
                    type='email'
                    required
                    onChange={handleChange}
                    name='email'
                    value={email}
                />

                <Input
                    label='Password'
                    type='password'
                    required
                    onChange={handleChange}
                    name='password'
                    value={password}
                />
                <div className='buttons-container'>
                    <Button buttonType='' type='submit'>Sign In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>
                        Google sign in
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm






