import React, { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.util';
import Input from '../input/input.component'
import Button from '../button/button.component'
import './signupform.styles.scss'


function SignUpForm() {


    const [formField, setFormField] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const { displayName, email, password, confirmPassword } = formField;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormField({ ...formField, [name]: value })
    }
    const resetFormField = () => {
        setFormField({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (password !== confirmPassword)
                throw new Error('Password')
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName })

        } catch (err) {
            if (err.code === 'auth/email-already-in-use')
                alert('Cannot SignUp as email Already in use.')
            console.log(err);
        }
        resetFormField();
    }
    return (
        <div className="sign-up-container">
            <h2>Don't Have an Account</h2>
            <span>Sign Up with your Email and Password</span>
            <form onSubmit={handleSubmit}>
                <Input label="Display Name" type="text" onChange={handleChange} name="displayName" value={displayName} required />
                <Input label="Email" type="email" onChange={handleChange} name="email" value={email} required />
                <Input label="Password" type="password" onChange={handleChange} name="password" value={password} required />
                <Input label="Confirm Password" type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} required />
                <Button buttonType="" type="submit">Submit</Button>
            </form>
        </div>
    )
}

export default SignUpForm